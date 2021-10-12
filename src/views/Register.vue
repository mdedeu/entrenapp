<template>
  <p v-if="this.error">{{this.message}}</p>

  <v-container v-else fluid  fill-height class="primary">
    <v-row class="mt-16">
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
      <v-col>  <v-text-field   label="Nombre de usuario"
                               required
                               solo
                               v-model="username"
                               prepend-inner-icon="mdi-account"
                               outlined
      ></v-text-field> </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col>  <v-text-field   label="Email"
                               required
                               solo
                               prepend-inner-icon="mdi-email-outline"
                               v-model="email"
                               outlined
      ></v-text-field> </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col>  <v-text-field label="Contraseña"
                             required
                             solo
                             prepend-inner-icon="mdi-lock-outline"
                             v-model="password"
                             :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                             :type="show ? 'text' : 'password'"
                             @click:append="changeShow"
                             outlined
      ></v-text-field> </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col>  <v-text-field label="Confirmar Contraseña"
                             required
                             solo
                             prepend-inner-icon="mdi-lock-outline"
                             v-model="confirm_password"
                             :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                             :type="show ? 'text' : 'password'"
                             @click:append="changeShow"
                             outlined
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
  </v-container>
</template>

<script>

export default {
  name: "Register",
  data() {
    return{
        username : null,
        email : null,
        password : null,
        confirm_password : null,
      show: false,
      error:false,
      message:null
    }
  },
  methods :{
    changeShow(){
      this.show = !this.show ;
    },

    async register(){
      if(!this.password||!this.confirm_password||this.password != this.confirm_password){
        this.message='Las contraseña no coinciden'
        this.error=true
        return;
      }else if(!this.email || !this.email.includes('@') || !this.email.includes('.com')){
        this.message='El email ingresado no es valido'
        this.error=true
        return;
      }
      else{
        await this.$store.dispatch('security/add',{username:this.username,email:this.email,password:this.password})
        this.$router.push({name:'codeChecking',params:{ user:{username:this.username,password:this.password,email:this.email}}})
      }
    }
  }
}
</script>

<style scoped>

</style>