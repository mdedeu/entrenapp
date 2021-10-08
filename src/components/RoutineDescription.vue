<template>
  <v-container class="mb-7">
    <BackAndButton class="mt-6"><slot></slot></BackAndButton>
    <div  class="pt-10 accent--text">
      <v-row justify="center">
        <h2>{{routine.tipo}}</h2>
      </v-row>
      <v-row justify="center">
        <p>Nivel de dificultad :{{routine.dificultad}}</p>
      </v-row>
      <v-row justify="center">
        <p>
          Duracion: {{routine.duracion}}
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
  data(){
    return {routine: {tipo:"Pecho", dificultad: "Intermedio", duracion:"45'"}}
  }
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
