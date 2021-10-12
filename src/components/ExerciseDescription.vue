<template>
  <v-container class="mb-7">
    <ExerciseBackAndButton :exerciseId="this.exercise.id" class="mt-6"></ExerciseBackAndButton>
    <div  class="pt-10 accent--text">
      <v-row justify="center">
        <h2>{{exercise.name}}</h2>
      </v-row>
      <v-row justify="center">
        <p>Musculos que trabaja: {{exercise.name}}</p>
      </v-row>
      <v-row justify="center">
        <p>
          Duración: {{exercise.name}}
        </p>
      </v-row>
    </div>
  </v-container>

</template>



<script>
import ExerciseBackAndButton from './ExerciseBackAndButton'
export default {
  name: 'ExerciseDescription',
  components: {
    ExerciseBackAndButton
  },
  props:{
    exercise: {
      type: Object, //Nombre, musculo (o descanso), requirere herramientas, deportes
      required: true
    }
  },
}
</script>
<style scoped>
h2{
  font-size: 3em;
}
p{
  font-size: 1em;
}

</style>
