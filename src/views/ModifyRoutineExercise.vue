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
                Modifica la información de tu rutina
              </v-stepper-step>

              <v-divider></v-divider>


              <v-stepper-step
                  step="2"
              >
                Agrega o elimina ejercicios
              </v-stepper-step>

            </v-stepper-header>
          </v-stepper>
        </template>
      </v-col>
    </v-row>

    <v-row>
      <CarrouselParaGenerico :routinesCycle="this.routinesCycleData" @Info-Exercise="saveCycles"></CarrouselParaGenerico>
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
    CarrouselParaGenerico
    ,Loading
  },
  computed:{
    ...mapGetters('routineCycle',['getRoutineCycle']),
    ...mapGetters('cache',['get']),


  },
  data(){
    return{
      step:2,
      routinesCycleData: null,
      routineData: null,
      loading : false
    }
  },
  methods:{

   async saveCycles(cycles) {
     this.loading = true
      await this.$store.dispatch('routineCycle/getAll',this.routineData)
      await this.$store.dispatch('routine/getAll')

      let Apicycle =  this.getRoutineCycle

     let i;
     for ( i=0 ; i < cycles.length ; i++) {
       cycles[i].order = Number(cycles[i].order)
       cycles[i].repetitions = Number(cycles[i].repetitions)
       let info = {id:this.routineData.id, routineCycle:cycles[i]}
       if(Apicycle.filter((item)=>item.order===info.routineCycle.order).length > 0)
         await this.$store.dispatch('routineCycle/modify', info)
       else
         await this.$store.dispatch('routineCycle/create', info)
     }

     //si hay algun elemento en ApiCycle , que no esta en cycles , Entonces se elimino de los ciclos de ejercitacion
     for(let j = 0; j < Apicycle.length; j++){
       let encontrado = false;

       for(let i=0 ; i< cycles.length ; i++) {
         if (cycles[i].id == Apicycle[j].id) {
           encontrado = true;
         }
       }
       if(!encontrado){
         let info = {id: this.routineData.id, routineCycle: Apicycle[j]}
         await this.$store.dispatch('routineCycle/delete', info)
       }
     }

     //guardar la duracion de la rutina en metadata de la misma
     let sumaTotal = 0
     let equipacion = false
     for(let i = 0 ; i < cycles.length ; i++){
       let sumaParcial = 0 ;
       for(let j = 0 ; j < cycles[i].metadata.ejercicios.length;j++){
         if(cycles[i].metadata.ejercicios[j].equipacion){
           equipacion=true
         }

         if(cycles[i].metadata.ejercicios[j].time > 0 ){
           sumaParcial += Number(cycles[i].metadata.ejercicios[j].time)
         }else{
           sumaParcial += Number(cycles[i].metadata.ejercicios[j].reps)
         }


       }
       sumaTotal += (cycles[i].repetitions)*sumaParcial
     }
     sumaTotal = Math.round(sumaTotal/60)
     console.log(sumaTotal)

     this.routine.metadata={sport:this.routine.metadata.sport ,duracion:sumaTotal,equipacion:equipacion}

     await this.$store.dispatch('routine/modify',this.routine)

     this.loading = false
     this.$router.push({name:"RoutineDescription",params:{routine:this.routineData}})
   }
  },
  props:{
    routinesCycle:{
      type:[],
      required : false
    },
    routine:{
      type:Object,
      required:false
    }
  }, created() {
    if(!this.routine){
      this.routineData = this.$store.getters['cache/get']('routine')
    }
    else{
      this.routineData = this.routine
      this.$store.dispatch('cache/set', {key:'routine',value:this.routine})
    }

    if(!this.routinesCycle){
      this.routinesCycleData = this.$store.getters['cache/get']('routineCycle')

    }else{
      this.routinesCycleData = this.routinesCycle
      this.$store.dispatch('cache/set',{key:'routineCycle',value:this.routinesCycle})
    }
  }


}
</script>

<style scoped>

</style>