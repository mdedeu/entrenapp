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
      <CarrouselParaGenerico :routinesCycle="this.routinesCycleData" @Info-Exercise="saveCycles"></CarrouselParaGenerico>
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
  computed:{
    ...mapGetters('routineCycle',['getRoutineCycle']),
    ...mapGetters('cache',['get']),


  },
  data(){
    return{
      step:2,
      routinesCycleData: null,
      routineData: null
    }
  },
  methods:{

   async saveCycles(cycles) {
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