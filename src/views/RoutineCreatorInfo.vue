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
                  :complete="step > 1"
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
import {mapGetters} from 'vuex';

export default {
  name: "RoutineCreatorInfo",
  components: {
    HeaderApp,
    RutinasCreador,
  },
  methods:{
    async createRoutine(routine){
      let currentRoutine = {
        user: this.getUser,
        name: routine.name,
        id: routine.id,
        detail: routine.detail,
        difficulty: routine.difficulty,
        isPublic: routine.isPublic,
        metadata : routine.metadata
      }
      let createdroutine = await this.$store.dispatch("routine/create",currentRoutine);
      this.$router.push({name:"RoutineCreatorExercise",params:{routineID:createdroutine.id,routine:createdroutine}})
    }
  },
  data() {
    return {
      step: 1
    }
  },
  async created() {
    await this.$store.dispatch('security/getCurrentUser')
  },
  computed : {
    ...mapGetters(
        'security',
        ['getUser']
    )
  }
}
</script>

