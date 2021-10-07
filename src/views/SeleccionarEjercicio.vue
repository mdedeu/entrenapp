<template>
  <v-container fluid class="primary fill-height">
    <v-row justify="space-between">
      <v-col cols="4">
        <p class="accent--text text-h2">Ejercicios recomendados</p>
      </v-col>

      <v-col cols="4">
        <close></close>
      </v-col>
    </v-row>

    <v-row style="height: 90vh">
        <v-col>
          <PopupSeleccionarEjercicio></PopupSeleccionarEjercicio>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import close from '../components/Close'
import PopupSeleccionarEjercicio from '../components/PopupSeleccionarEjercicio'
export default {
  name: "SeleccionarEjercicio",
  components:{
    close,
    PopupSeleccionarEjercicio
  }
}
</script>

<style scoped>

</style>