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
                  :rules="[() => false]"
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

    <v-row style="height: 80vh">
      <RutinasCreador @Info-received="createRoutine" class="pt-16"/>
    </v-row>


  </v-container>


</template>

<script>
import HeaderApp from "../components/HeaderApp";
import RutinasCreador from '../components/RutinasCreador'

export default {
  name: "RoutineCreatorInfo",
  components: {
    HeaderApp,
    RutinasCreador,
  },
  methods:{
    async createRoutine(routine){
      let createdroutine =await this.$store.dispatch("routine/create",routine);
      console.log(createdroutine)
      this.$router.push({name:"RoutineCreatorExercise",params:{routineID:createdroutine.id,routine:createdroutine}})
    }
  }
}
</script>

