<template>
  <v-container fluid  fill-height class="primary">
    <v-alert type="error" v-if="this.error" width="100%" dismissible @click="resetErrors()">{{this.message}}</v-alert>
    <v-row>
      <v-col/>
      <v-col>
        <router-link :to="{name: 'Home'}">
          <v-img src = "../assets/logo.png" class="mr-auto ml-auto" alt="logo" width="25%"/>
        </router-link>
          </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col>  <v-text-field   label="Nombre de usuario*"
                               required
                               solo
                               v-model="username"
                               prepend-inner-icon="mdi-account"
                               outlined
                               :rules="rules.length"
      ></v-text-field> </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col>  <v-text-field   label="Email*"
                               required
                               solo
                               prepend-inner-icon="mdi-email-outline"
                               v-model="email"
                               outlined
                               :rules="rules.length"
      ></v-text-field> </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col>  <v-text-field label="Contraseña*"
                             required
                             solo
                             prepend-inner-icon="mdi-lock-outline"
                             v-model="password"
                             :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                             :type="show ? 'text' : 'password'"
                             @click:append="changeShow"
                             outlined
                             :rules="rules.length"
      ></v-text-field> </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col>  <v-text-field label="Confirmar Contraseña*"
                             required
                             solo
                             prepend-inner-icon="mdi-lock-outline"
                             v-model="confirm_password"
                             :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                             :type="show ? 'text' : 'password'"
                             @click:append="changeShow"
                             outlined
                             :rules="rules.length"
      ></v-text-field> </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col class="text-center">
        <v-btn class="accent text--primary" width="250" height="50"  @click="register" rounded>Registrate</v-btn>
      </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col class="text-center mt-n3"><u><router-link :to="{name: 'Login'}">
        <a class="grey--text"> Ya tenes una cuenta?</a></router-link></u></v-col>
      <v-col/>
    </v-row>
    <v-row style="height: 150px"></v-row>
    <v-dialog
        v-model="loading"
        hide-overlay
        persistent
        width="300"
    >
      <v-card
          color="primary"
          dark
      >
        <v-card-text>
          Creando cuenta
          <v-progress-linear
              indeterminate
              color="yellow"
              class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

export default {
  name: "Register",
  data() {
    return{
        loading: false,
        username : null,
        email : null,
        password : null,
        confirm_password : null,
        show: false,
        error:false,
        message:null,
        regexMail :  new RegExp("^(.+)@(.+)$"),
        rules: {
          length:[ val => (val || '').length > 0 || 'Este campo es obligatorio' ]
        }
    }
  },
  methods :{
    startLoading(){
      this.loading=true
    },
    resetErrors(){
      this.error = false
      this.message = null
    },
    resetForm(){
      this.username = null
      this.email = null
      this.password = null
      this.confirm_password = null
    },
    changeShow(){
      this.show = !this.show ;
    },

    async register(){
      if(!this.username){
        this.error = true
        this.message = 'Falta ingresar 1 o más campos'
        this.username = ''
        if(!this.password){
          this.confirm_password = ''
          this.password = ''
        }
        if(!this.email)
          this.email = ''
        return
      }
      if(!this.regexMail.test(this.email)){
        this.error = true
        this.email = null
        console.log("entre")
        this.message='El email ingresado no es valido'
        return;
      }else if(!this.password||!this.confirm_password||this.password !== this.confirm_password){
        this.message='Las contraseña no coinciden'
        this.error=true
        this.password = null
        this.confirm_password = null
        return;
      }else{
        this.loading=true
           this.$store.dispatch('security/add',{username:this.username,email:this.email,password:this.password}).then(()=>{
             this.$router.push({name:'codeChecking',params:{ user:{username:this.username,password:this.password,email:this.email}}})},
               (response)=>{
                 this.error = true
                  if(response.code === 2){
                    if(response.details[0].includes('username')){
                      this.loading = false
                      this.message = 'No puede utilizar ese nombre de usuario.'
                      this.username = null
                    }
                    else{
                      this.loading = false
                      this.message = 'No puede utilizar ese email.'
                      this.email = null
                    }
                  }
                  else{
                    this.loading = false
                    this.message = "Revise su conexion y vuelva a intentar. Si persiste, contacte a soporte."
                  }
               }
           )
        }
    }
  }
}
</script>

<style scoped>

</style>