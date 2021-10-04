<template>

  <v-sheet
      color="blue"
      elevation="1"
      height="50%"
      width="100%"
      class ="yellow--text"
  >
  <v-container fluid>


    <BackAndButton/>

    <v-row justify="left" class="pt-10">
        <p class="text-h3">Pecho <br>
          Nivel de dificultad : Intermedio<br>
          Duracion: 45'</p>
    </v-row>



  </v-container>
  </v-sheet>

</template>



<script>
import BackAndButton from './BackAndButton'
export default {
  name: 'RoutineDescription',
  components: {
    BackAndButton
  }
}
</script>
