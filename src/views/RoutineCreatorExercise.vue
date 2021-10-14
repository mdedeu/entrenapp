<template>
  <Loading v-if="loading"></Loading>

  <v-container v-else fluid class="primary fill-height">
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
import Loading from "../components/Loading"


export default {
  name: "RoutineCreator",
  components:{
    HeaderApp,
    CarrouselParaGenerico,
    Loading
  },
  data(){
    return {
      step:2,
      routineIDdata: null,
      routineData: null,
      loading : false
    }
  },
  computed:{
    ...mapGetters('cache',['get']),

  },
  methods:{
   async saveCycles(cycles) {

    this.loading = true
     let i;
     for ( i=0 ; i < cycles.length ; i++) {
       cycles[i].order = Number(cycles[i].order)
       cycles[i].repetitions = Number(cycles[i].repetitions)
       let info = {id:this.routineIDdata, routineCycle:cycles[i]}
       await this.$store.dispatch('routineCycle/create', info)
     }

     //guardar la informacion de la rutina en metadata de la misma

    let sumaTotal = 0
     let equipacion = false
     for(let i = 0 ; i < cycles.length ; i++){
       let sumaParcial = 0 ;
       for(let j = 0 ; j < cycles[i].metadata.ejercicios.length;j++){
         if( cycles[i].metadata.ejercicios[j].equipacion)
           equipacion=true
         sumaParcial+=cycles[i].metadata.ejercicios[j].time
       }
       sumaTotal += (cycles[i].repetitions)*sumaParcial
     }
      sumaTotal = Math.round(sumaTotal/60)

     let routineAPI = await this.$store.dispatch('routine/get',this.routine)

     routineAPI.metadata={sport:this.routine.metadata.sport ,duracion:sumaTotal,equipacion:equipacion}

     await this.$store.dispatch('routine/modify',routineAPI)
     this.loading=false

    this.$router.push({name:"RoutineDescription",params:{routine:routineAPI}})

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
  async created() {
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
    this.loading = true
      await this.$store.dispatch('routine/getAll')
    this.loading = false
  }
}
</script>

<style scoped>

</style>