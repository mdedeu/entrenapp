<template>
  <v-container class="mb-7">
    <BackAndButton :routineID="this.routine.id" :routine="this.routine" class="mt-6"></BackAndButton>
    <div  class="pt-10 accent--text">
      <v-row justify="center ">
        <h2>{{this.routine.name}}</h2>
      </v-row>
      <v-row justify="center">
        <p>Nivel de dificultad: {{difficulty}}</p>
      </v-row>
      <v-row justify="center">
        <p>
          Duración: {{duracion}} minutos
        </p>
      </v-row>
    </div>


  </v-container>

</template>



<script>
import BackAndButton from './BackAndButton'
import {mapGetters} from 'vuex'

export default {
  name: 'RoutineDescription',
  components: {
    BackAndButton
  },
  data(){
    return{
      routinesCycle:[]
    }
  },
  props:{
    routine: {
      type: Object,/**name,dificultad,duracion*/
      required: true
    },
  },
  computed: {
    ...mapGetters('routineCycle',['getRoutineCycle']),

    duracion(){

      let sumaTotal = 0 ;
      for(let i = 0 ; i < this.routinesCycle.length ; i++){
        let sumaParcial = 0 ;
        for(let j = 0 ; j < this.routinesCycle[i].metadata.ejercicios.length;j++){
          sumaParcial+=this.routinesCycle[i].metadata.ejercicios[j].time
        }
        sumaTotal += (this.routinesCycle[i].repetitions)*sumaParcial
      }
      return Math.round(sumaTotal/60)
    },
    difficulty(){
      if(this.routine.difficulty == 'rookie')
        return 'Principiante'
      if(this.routine.difficulty == 'intermediate')
        return 'Intermedio'
      return 'Avanzado'
    }
  },
  async created(){
    this.loading=true
    await this.$store.dispatch('routineCycle/getAll',this.routine)
    this.loading=false
    this.routinesCycle = this.getRoutineCycle
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
