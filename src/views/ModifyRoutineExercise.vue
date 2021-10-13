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
      <CarrouselParaModificacion :routinesCycle="this.routinesCycleData" @Info-Exercise="saveCycles"></CarrouselParaModificacion>
    </v-row>



  </v-container>

</template>

<script>
import HeaderApp from "../components/HeaderApp";
import CarrouselParaModificacion from '../components/CarrouselParaModificacion'
import {mapGetters} from 'vuex'

export default {
  name: "RoutineCreator",
  components:{
    HeaderApp,
    CarrouselParaModificacion
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
       let info = {id:this.routineData.id, routineCycleData:cycles[i]}
       if(Apicycle.filter((item)=>item.order===info.routineCycleData.order).length > 0)
         await this.$store.dispatch('routineCycle/modify', info)
       else
         await this.$store.dispatch('routineCycle/create', info)
     }
    this.$router.push({name:"RoutineDescription",params:{routine:this.routineData}})
   }
  },
  props:{
    routinesCycle:{
      type:[],
      required : true
    },
    routine:{
      type:Object,
      required:true
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
      this.routinesCycleData = this.routineCycleData = this.$store.getters['cache/get']('routineCycle')

    }else{
      this.routinesCycleData = this.routinesCycle
      this.$store.dispatch('cache/set',{key:'routineCycle',value:this.routineCycle})
    }
  }


}
</script>

<style scoped>

</style>