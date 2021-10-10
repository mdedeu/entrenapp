<template>
  <v-container fluid class="primary fill-height" style="height: 100vh">
    <v-row>
      <ExerciseBackAndButton :exercise="this.exercise" :exerciseId="this.exercise.id" class="mt-6"></ExerciseBackAndButton>
    </v-row>
    <v-row justify="center">
      <v-col cols="3" >
        <p class="text-h4 accent--text">{{exercise.name}}</p>
      </v-col>
    </v-row>

    <v-row style="height: 50%">
      <v-container fluid>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QVvY6liKWVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </v-container>
    </v-row>

    <v-row justify="center">
      <v-col cols="6">
        <p class="text-h5 accent--text">Este ejercicios trabaja: {{exercise.metadata.musculos[0]}}</p>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import ExerciseBackAndButton from "./ExerciseBackAndButton";
export default {
  name: "EjercicioDescripcion",
  components: {ExerciseBackAndButton},
  props:{
    exercise: {
      type: Object, //Nombre, musculo (o descanso), requirere herramientas, deportes
      required: true
    },
  },
}
</script>

<style scoped>

</style>