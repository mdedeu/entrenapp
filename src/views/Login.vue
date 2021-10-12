<template>
  <v-container fluid  fill-height class="primary">
      <v-row>
        <v-col>
          <p v-if="incorrect" class="text--h3">{{ this.error }}</p>
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
        <v-col>  <v-text-field   label="Nombre de usuario"
                                 required
                                 solo
                                 prepend-inner-icon="mdi-account"
                                 outlined
                                 v-model="email"
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
        <v-col class="text-center">
          <v-btn class="accent text--primary" width="250" height="50" rounded @click="login">Ingresá</v-btn>
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

export default {

  name: "Login.vue",
  data() {
    return{
      email : null,
      password : null,
      show: false,
      incorrect:false,
      error:null
    }
  },
  methods :{
    async login(){
     try{
       const credentials = new Credentials(this.email, this.password)
       await this.$store.dispatch("security/login",{credentials, rememberMe: true });
       this.$router.push({name:"RoutineLanding"})
     }
      catch(e){
        this.error=e.details
        this.incorrect=true
     }
    },
    changeShow(){
      this.show = !this.show ;
    }
  }
}
</script>

<style scoped>

</style>