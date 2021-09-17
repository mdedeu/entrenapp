<template>
  <v-app-bar
      outlined
      app
      color = "primary"
    class="">
    <v-img :src="require('../assets/logo.png')"
           alt="Vuetify Logo"
           class="shrink mr-2"
           contain
           transition="scale-transition"
           width="40">
    </v-img>
    <div class="d-inline-flex ml-16 col-4">
      <h4 class="white--text  mr-6">Creá tu rutina</h4>
      <h4 class="white--text mr-6">Rutinas</h4>
      <h4 class="white--text mr-6">Ejercicios</h4>
      <h4 class="white--text mr-6">Mi perfil</h4>
    </div>

  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderApp"
}
</script>

<style scoped>

</style>