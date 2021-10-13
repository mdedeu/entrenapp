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
import {mapGetters} from 'vuex'

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
  computed:{
    ...mapGetters('cache',['get']),

  },
  data() {
    return {
      exerciseData: null,
    }
  },
  created() {
    if(!this.exercise){
      this.exerciseData = this.$store.getters['cache/get']('exercise')
    }
    else{
      this.exerciseData = this.exercise
      this.$store.dispatch('cache/set',{key:'exercise',value:this.exercise})
    }
  }
}
</script>

<style scoped>

</style>