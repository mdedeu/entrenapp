<template>
  <v-container fluid class="primary fill-height" style="height: 100vh">
    <v-row justify="left">
      <v-col cols="3" >
        <p class="text-h2 accent--text">{{ejercicio.name}}</p>
      </v-col>
    </v-row>

    <v-row style="height: 50%">
      <v-container fluid class="white">
        <p class="text-h3"> Video de la tecnica </p>
      </v-container>
    </v-row>

    <v-row justify="left">
      <v-col cols="6">
        <p class="text-h4 accent--text">Musculos que trabaja: {{ejercicio.muscles}}</p>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "EjercicioDescripcion",
  data(){
    return {
      ejercicio:{name:"Flexiones de brazo",muscles:"Pecho"}
    }
  }
}
</script>

<style scoped>

</style>