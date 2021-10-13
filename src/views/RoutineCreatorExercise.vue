<template>
  <v-container fluid class="primary fill-height">
    <v-row style="height: 10vh">
      <HeaderApp/>
    </v-row>
    <v-row style="height: 10vh">
      <v-col>
        <template>
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step
                  complete
                  step="1"
              >
                Informacion de la rutina
              </v-stepper-step>

              <v-divider></v-divider>


              <v-stepper-step
                  step="2"
              >
                Agregar ejercicios
              </v-stepper-step>

            </v-stepper-header>
          </v-stepper>
        </template>
      </v-col>
    </v-row>

    <v-row>
      <CarrouselParaCreacion @Info-Exercise="saveCycles"></CarrouselParaCreacion>
    </v-row>



  </v-container>

</template>

<script>
import HeaderApp from "../components/HeaderApp";
import CarrouselParaCreacion from '../components/CarrouselParaCreacion'



export default {
  name: "RoutineCreator",
  components:{
    HeaderApp,
    CarrouselParaCreacion
  },
  data(){
    return {
      step:2,
      routineIDdata: null,
      routineData: null
    }
  },
  methods:{
   async saveCycles(cycles) {


     let i;
     for ( i=0 ; i < cycles.length ; i++) {
       cycles[i].order = Number(cycles[i].order)
       cycles[i].repetitions = Number(cycles[i].repetitions)
       let info = {id:this.routineIDdata, routineCycle:cycles[i]}
       await this.$store.dispatch('routineCycle/create', info)
     }
    this.$router.push({name:"RoutineDescription",params:{routine:this.routineData}})

   }
  },
  props:{
    routineID:{
      type:Number
    },
    routine:{
      type:Object
    }
  },
  created() {
    if(!this.routineID){
      this.routineIDdata = ((JSON).parse(localStorage.getItem('vuex')))['cache']['propsData']['routineID']
      this.routineData = ((JSON).parse(localStorage.getItem('vuex')))['cache']['propsData']['routine']
    }
    else{
      this.routineIDdata = this.routineID
      this.routineData = this.routine
      this.$store.dispatch('cache/setRoutineID',this.routineID)
      this.$store.dispatch('cache/setRoutine',this.routine)
    }
  }
}
</script>

<style scoped>

</style>