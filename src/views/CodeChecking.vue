<template>
<v-container  fluid class="primary fill-height">

<v-row justify="center">
  <h1>Revisa tu casilla de email</h1>
</v-row>
  <v-row justify="center">
    <p class="accent--text"> Te enviamos un código para verificar tu cuenta</p>
  </v-row>

  <v-row>
    <v-col/>
    <v-col>  <v-text-field label="Ingresa el código"
                           required
                           solo
                           prepend-inner-icon="mdi-lock-outline"
                           v-model="code"
                           outlined
    ></v-text-field> </v-col>
    <v-col/>
  </v-row>
  <v-row v-if="error">
    <v-col>
      <p  class="text-h4 red--text">{{this.msg}}</p>
    </v-col>
  </v-row>


  <v-row>
    <v-col/>
    <v-col class="text-center">
      <v-btn class="accent text--primary" width="250" height="50"  @click="check"  :loading="loading" rounded>Confirmar</v-btn>
    </v-col>
    <v-col/>
  </v-row>

</v-container>
</template>

<script>

export default {
  name: "CodeChecking",

  data(){
    return{
      code:null,
      error:false,
      msg:null,
      userData: null,
      loading: false
    }
  },
  props:{
    user:{
      type:Object,
      required:true
    }
  },
  methods:{
    async check(){
        try{
          this.loading = true
          await this.$store.dispatch("security/verify",{email:this.userData.email,code:this.code})
          await this.$store.dispatch("security/login",{ credentials:{username:this.userData.username,password:this.userData.password}, rememberMe: true });
          this.loading = false
          this.$router.push({name:"RoutineLanding"})
      }catch (e){
          this.loading=false
        this.error=true
        this.msg='El código ingresado es incorrecto'
      }
    }

  },
  created() {
    if(!this.user){
      this.userData = this.$store.getters['cache/get']('user')
    }
    else{
      this.userData = this.user
      this.$store.dispatch('cache/set', {key:'user',value:this.user})
    }
  }
}
</script>

<style scoped>

</style>