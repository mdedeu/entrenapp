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
      <CarrouselParaGenerico @Info-Exercise="saveCycles"></CarrouselParaGenerico>
    </v-row>



  </v-container>

</template>

<script>
import HeaderApp from "../components/HeaderApp";
import CarrouselParaGenerico from '../components/CarrouselParaGenerico'
import {mapGetters} from 'vuex'



export default {
  name: "RoutineCreator",
  components:{
    HeaderApp,
    CarrouselParaGenerico
  },
  data(){
    return {
      step:2,
      routineIDdata: null,
      routineData: null
    }
  },
  computed:{
    ...mapGetters('cache',['get']),

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

     //guardar la informacion de la rutina en metadata de la misma

    let sumaTotal = 0
     for(let i = 0 ; i < cycles.length ; i++){
       let sumaParcial = 0 ;
       for(let j = 0 ; j < cycles[i].metadata.ejercicios.length;j++){
         sumaParcial+=cycles[i].metadata.ejercicios[j].time
       }
       sumaTotal += (cycles[i].repetitions)*sumaParcial
     }
      sumaTotal = Math.round(sumaTotal/60)
     this.routine.metadata={sport:this.routine.metadata.sport ,duracion:sumaTotal}

     await this.$store.dispatch('routine/modify',this.routine)


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
      this.routineIDdata = this.$store.getters['cache/get']('routineID')
      this.routineData = this.$store.getters['cache/get']('routine')
    }
    else{
      this.routineIDdata = this.routineID
      this.routineData = this.routine
      this.$store.dispatch('cache/set',{key:'routineID',value:this.routineID})
      this.$store.dispatch('cache/set',{key:'routine',value:this.routine})
    }
  }
}
</script>

<style scoped>

</style>