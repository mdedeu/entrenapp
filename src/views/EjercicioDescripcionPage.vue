<template>
  <v-container fluid class="primary fill-height">
    <v-row>
      <v-col>
        <EjercicioDescripcion :exercise="this.exercise"></EjercicioDescripcion>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EjercicioDescripcion from '../components/EjercicioDescripcion'

export default {
  name: "EjercicioDescripcionPage",
  components:{
    EjercicioDescripcion
  },
  props:{
    exercise: {
      type: Object,/**name,dificultad,duracion*/
      required: true
    }
  },
  created(){
    console.log(this.exercise)
  }
}
</script>

<style scoped>

</style>