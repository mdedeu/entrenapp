<template>
  <v-container fluid class="primary fill-height">
    <v-row>
      <v-col>
        <EjercicioDescripcion :exercise="this.exerciseData"></EjercicioDescripcion>
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
  data() {
    return {
      exerciseData: null,
    }
  },
  created() {
    if(!this.exercise){
      this.exerciseData = ((JSON).parse(localStorage.getItem('vuex')))['cache']['propsData']['exercise']
    }
    else{
      this.exerciseData = this.exceptionDetails
      this.$store.dispatch('cache/setExercise',this.exercise)
    }
  }
}
</script>

<style scoped>

</style>