<template>
  <Loading v-if="loading"></Loading>
  <v-container v-else fluid class="primary fill-height">
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

    <v-row style="height: 80vh">
      <RutinasModificador :routine="this.routineData" :routineCycle="this.routineCycleData" @Info-received="modificateRoutine" class="pt-16"/>
    </v-row>


  </v-container>

</template>

<script>
import HeaderApp from "../components/HeaderApp";
import RutinasModificador from '../components/RutinasModificador'
import {mapGetters} from 'vuex'
import Loading from "../components/Loading"

export default {
  name: "RoutineCreatorInfo",
  components: {
    HeaderApp,
    RutinasModificador,
    Loading
  },
  methods:{
    async modificateRoutine(routine){
      this.loading = true
      await this.$store.dispatch('routine/getAll')
      this.routineData.name=routine.name
      this.routineData.detail=routine.detail
      this.routineData.isPublic=routine.isPublic
      this.routineData.difficulty = routine.difficulty
      this.routineData.metadata=routine.metadata
      await this.$store.dispatch("routine/modify",this.routineData);
      this.loading = false
      this.$router.push({name:"ModifyRoutineExercise",params:{routine:this.routineData,routinesCycle:this.routineCycleData}})
    }
  },
  computed:{
    ...mapGetters('cache',['get']),

  },
  props:{
    routine:{
      type:Object,
      required:false
    },
    routineCycle:{
      type:[],
      required:false,
    }
  },
  created() {
    if(!this.routine){
      this.routineData = this.$store.getters['cache/get']('routine')
    }
    else{
      this.routineData = this.routine
      this.$store.dispatch('cache/set', {key:'routine',value:this.routine})
    }

    if(!this.routineCycle){
      this.routineCycleData = this.$store.getters['cache/get']('routineCycle')
    }else{
      this.routineCycleData = this.routineCycle
      this.$store.dispatch('cache/set',{key:'routineCycle',value:this.routineCycle})
    }
  },
  data(){
    return{
      routineData: null,
      routineCycleData: null,
      loading : false
    }
  }
}
</script>

