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
    <v-btn outlined rounded class="mr-3 font-weight-bold">Inicia Sesión</v-btn>
    <v-btn outlined rounded class="primary accent--text font-weight-bold">Registrate</v-btn>
  </v-app-bar>

</template>

<script>
export default {
  name: "HeaderHome"
}
</script>

<style scoped>

</style>