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
    <v-dialog :value="exito" width="500px">
      <v-card class="ma-1">
        <v-card-title class="green lighten-1">
          Exito
        </v-card-title>
        <v-card-text>
          <v-row class="mt-6" justify="center">
            Rutina creada con éxito. Siga para marcar las ciclos de la misma
          </v-row>
          <v-row justify="center">
            <v-icon class="green--text" size="80">
              mdi-check
            </v-icon>
          </v-row>

        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col>
              <v-btn @click="redirect" class="green white--text">
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
      this.createdRoutine = await this.$store.dispatch("routine/create",routine);
      this.currentRoutine = {
        user: this.getUser,
        name: this.createdRoutine.name,
        id: this.createdRoutine.id,
        detail: this.createdRoutine.detail,
        difficulty: this.createdRoutine.difficulty,
        isPublic: this.createdRoutine.isPublic,
        metadata: this.createdRoutine.metadata
      }
      this.exito=true
    },
    redirect(){
      this.$router.push({name:"RoutineCreatorExercise",params:{routineID:this.createdRoutine.id,routine:this.currentRoutine}})
    }
  },
  data() {
    return {
      step: 1,
      exito: false,
      createdRoutine: null,
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

