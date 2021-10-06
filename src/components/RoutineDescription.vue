<template>
  <v-container>
    <BackAndButton><slot></slot></BackAndButton>
    <v-row justify="left" class="pt-10">
        <p class="text-h3 yellow--text">Pecho <br>
          Nivel de dificultad : Intermedio<br>
          Duracion: 45'
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
  }
}
</script>
