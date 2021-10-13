<template>
  <v-container class="mb-7">
    <BackAndButton :routineID="this.routineData.id" :routine="this.routineData" class="mt-6"></BackAndButton>
    <div  class="pt-10 accent--text">
      <v-row justify="center">
        <h2>{{this.routineData.name}}</h2>
      </v-row>
      <v-row justify="center">
        <p>Nivel de dificultad: {{this.routineData.difficulty}}</p>
      </v-row>
      <v-row justify="center">
        <p>
          Duración: {{this.routineData.name}}
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
  created() {
    if(!this.routine){
      this.routineData = ((JSON).parse(localStorage.getItem('vuex')))['propsData']['routine']
    }
    else{
      this.routineData = this.routine
      this.$store.dispatch('cache/setRoutine',this.routine)
    }
  },
  data(){
    return{
      routineData: null
    }
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
