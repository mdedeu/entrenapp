<template>
  <v-app-bar
      app
      color = "accent">
    <v-img :src="require('../assets/logo_black_wout_letters.png')"
           alt="Vuetify Logo"
           class="shrink mr-2"
           contain
           transition="scale-transition"
           width="40">
    </v-img>
    <v-toolbar-title class="font-weight-bold">ENTRENAPP</v-toolbar-title>
    <v-spacer>
    </v-spacer>
    <router-link :to = "{name: 'Login'}" class="text-decoration-none">
    <v-btn outlined rounded class="mr-3 font-weight-bold" @click="Login">
      Inicia Sesión
    </v-btn>
    </router-link>
    <v-btn outlined rounded class="primary accent--text font-weight-bold" @click="Register">Registrate</v-btn>
  </v-app-bar>

</template>

<script>
export default {
  name: "HeaderHome",
  methods:{
    Login(){
      this.$router.push({name:"Login"})
    },
    Register(){
      this.$router.push({name:"Register"})
    }

  }
}
</script>

<style scoped>

</style>