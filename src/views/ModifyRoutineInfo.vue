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
      <RutinasModificador :routine="this.routine" :routineCycle="this.routineCycle" @Info-received="modificateRoutine" class="pt-16"/>
    </v-row>


  </v-container>

</template>

<script>
import HeaderApp from "../components/HeaderApp";
import RutinasModificador from '../components/RutinasModificador'

export default {
  name: "RoutineCreatorInfo",
  components: {
    HeaderApp,
    RutinasModificador,
  },
  methods:{
    async modificateRoutine(routine){
      await this.$store.dispatch('routine/getAll')
      this.routine.name=routine.name
      this.routine.detail=routine.detail
      this.routine.isPublic=routine.isPublic
      this.routine.difficulty = routine.difficulty
      this.routine.metadata=routine.metadata
      await this.$store.dispatch("routine/modify",this.routine);
      this.$router.push({name:"ModifyRoutineExercise",params:{routine:this.routine,routinesCycle:this.routineCycle}})
    }
  },
  props:{
    routine:{
      type:Object,
      required:true
    },
    routineCycle:{
      type:[],
      required:true,
    }
  },
}
</script>

