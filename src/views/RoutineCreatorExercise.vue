<template>
  <v-container fluid class="primary fill-height">
    <v-row style="height: 10vh">
      <HeaderApp/>
    </v-row>
    <v-row style="height: 10vh">
      <v-col>
        <template>
          <v-stepper alt-labels>
            <v-stepper-header>
              <v-stepper-step
                  complete
                  step="1"
              >
                Informacion de la rutina
              </v-stepper-step>

              <v-divider></v-divider>


              <v-stepper-step
                  :rules="[() => false]"
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
  methods:{
   async saveCycles(cycles) {


     let i;
     for ( i=0 ; i < cycles.length ; i++) {
       cycles[i].order = Number(cycles[i].order)
       cycles[i].repetitions = Number(cycles[i].repetitions)
       let info = {id:this.routineID, routineCycle:cycles[i]}
       await this.$store.dispatch('routineCycle/create', info)
     }
    this.$router.push({name:"Tus rutinas"})
   }
  },
  props:{
    routineID:{
      type:Number,
      required : true
    }
  }
}
</script>

<style scoped>

</style>