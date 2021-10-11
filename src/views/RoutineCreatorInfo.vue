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
    <v-dialog :value="exito" width="600px" height="600px">
      <v-card class="fill-height">
        <v-card-title class="green lighten-1">
          Exito
        </v-card-title>
        <v-card-text>
          Rutina creada con éxito. Proseguí para detallar las ciclos de la misma
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col>
              <v-btn @click="redirect">
                Continuar
              </v-btn>
            </v-col>
          </v-row>

        </v-card-actions>
      </v-card>
    </v-dialog>


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

      let createdroutine = await this.$store.dispatch("routine/create",routine);
      let currentRoutine = {
        user: this.getUser,
        name: createdroutine.name,
        id: createdroutine.id,
        detail: createdroutine.detail,
        difficulty: createdroutine.difficulty,
        isPublic: createdroutine.isPublic,
        metadata : createdroutine.metadata
      }
      this.currentRoutine = currentRoutine
      try{
        this.createdRoutine_component = await this.$store.dispatch("routine/create",currentRoutine);
      }catch (e) {
        console.log(e)
      }
      this.exito=true
    },
    redirect(){
      this.$router.push({name:"RoutineCreatorExercise",params:{routineID:this.createdRoutine_component.id,routine:this.currentRoutine}})
    }
  },
  data() {
    return {
      step: 1,
      exito: false,
      createdRoutine_component: null,
      currentRoutine: null
    }
  },
  async created() {
    await this.$store.dispatch('security/getCurrentUser')
  },
  computed : {
    ...mapGetters(
        'security',
        ['getUser']
    ),
  }
}
</script>

