<template>
  <Loading v-if="loading"></Loading>

  <v-container v-else fluid  fill-height class="primary">
      <v-row>
        <v-col>
          <v-alert v-if="incorrect" type="error" dismissible  @click="reset">
           {{this.error}}
          </v-alert>
        </v-col>
      </v-row>

    <v-row class="mt-16">
        <v-col/>
        <v-col>
          <router-link :to= "{name: 'Home'}">
            <v-img src = "../assets/logo.png" class="mr-auto ml-auto" alt="logo" width="50%"/>
          </router-link>
       </v-col>
        <v-col/>
      </v-row>
      <v-row>
        <v-col/>
        <v-col>  <v-text-field   label="Nombre de usuario*"
                                 required
                                 prepend-inner-icon="mdi-account"
                                 v-model="email"
                                 background-color="white"
                                 color="accent"
                                 solo
                                 :rules="rules.name"
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
                               background-color="white"
                               color="accent"
                               :rules="rules.name"
        ></v-text-field> </v-col>
        <v-col/>
      </v-row>
      <v-row>
        <v-col/>
        <v-col class="text-center">
          <v-btn  class="accent text--primary" width="250" height="50" rounded @click="login">Ingresá</v-btn>
        </v-col>
        <v-col/>
      </v-row>
    <v-row>
      <v-col/>
      <v-col class="text-center mt-n3"><u><a class="grey--text">Olvidaste tu contraseña?</a></u></v-col>
      <v-col/>
    </v-row>
  </v-container>
</template>

<script>
import {Credentials} from "../../API/user";
import Loading from "../components/Loading"

export default {

  name: "Login.vue",
  components:{Loading},
  data() {
    return{
      loading : false,
      email : null,
      password : null,
      show: false,
      incorrect:false,
      error:null,
      dictionary : {
        passUserError: 'Usuario o contraseña incorrecta',
      },
      rules:{
        name: [
            val => (val || '').length > 0 || 'Este campo es obligatorio',
        ]
      }

    }
  },
  methods :{
    async login(){
     try{
       if((this.password || '').length > 0 && (this.email || '').length>0){
         const credentials = new Credentials(this.email, this.password)
         this.loading = true
         await this.$store.dispatch("security/login",{credentials, rememberMe: true });
         this.$router.push({name:"RoutineLanding"})
       }
     }
      catch(e){
        this.loading = false
        if(e.description.includes("username") || e.description.includes("password")){
          this.error= this.dictionary.passUserError
        }
        else {
          this.error = e.details
        }
        this.incorrect=true
        this.password = null;
        this.email = null;
     }
    },
    changeShow(){
      this.show = !this.show ;
    },
    reset(){
      this.incorrect = false;
      this.error = null;
    }
  }
}
</script>

<style scoped>

</style>