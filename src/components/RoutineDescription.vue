<template>
  <v-container class="mb-7">
    <BackAndButton :routineID="this.routine.id" :routine="this.routine" class="mt-6"></BackAndButton>
    <div  class="pt-10 accent--text">
      <v-row justify="center">
        <h2>{{routine.name}}</h2>
      </v-row>
      <v-row justify="center">
        <p>Nivel de dificultad: {{routine.difficulty}}</p>
      </v-row>
      <v-row justify="center">
        <p>
          Duración: {{routine.name}}
        </p>
      </v-row>
    </div>


  </v-container>

</template>



<script>
import BackAndButton from './BackAndButton'
export default {
  name: 'RoutineDescription',
  components: {
    BackAndButton
  },
  props:{
    routine: {
      type: Object,/**name,dificultad,duracion*/
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
