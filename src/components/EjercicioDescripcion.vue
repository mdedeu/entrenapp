<template>
  <v-container fluid class="primary fill-height" style="height: 100vh">
    <v-row justify="center">
      <v-col cols="3" >
        <p class="text-h4 accent--text">{{ejercicio.name}}</p>
      </v-col>
    </v-row>

    <v-row style="height: 50%">
      <v-container fluid>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QVvY6liKWVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </v-container>
    </v-row>

    <v-row justify="center">
      <v-col cols="6">
        <p class="text-h5 accent--text">Músculos que trabaja: {{ejercicio.muscles}}</p>
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