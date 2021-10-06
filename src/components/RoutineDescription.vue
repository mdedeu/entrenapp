<template>
  <v-container>
    <BackAndButton><slot></slot></BackAndButton>
    <v-row justify="left" class="pt-10">
        <p class="text-h3 yellow--text">{{routine.tipo}}<br>
          Nivel de dificultad :{{routine.dificultad}}<br>
          Duracion: {{routine.duracion}}
        </p>
    </v-row>
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
