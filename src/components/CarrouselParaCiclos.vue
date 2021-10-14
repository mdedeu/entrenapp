<template>
  <v-carousel height="650px">

    <v-carousel-item order="1">
      <v-container fluid class="accent fill-height mt-6">

        <v-row justify="space-around">
          <v-col cols="3">
            <p class="text-h4 primary--text"> {{this.calentamiento.name}}:</p>
          </v-col>
          <v-col cols="3">
            <p class="text-h5  primary--text"> Número de repeticiones: {{this.calentamiento.repetitions}}</p>
          </v-col>
        </v-row>

        <v-container class="shrink">
          <v-row justify="center"  style="height: 10vh" v-for="calExec in this.calentamiento.metadata.ejercicios" :key="calExec.name">
            <v-col>
              <v-card
                  min-width="700px"
                            rounded
                            :color="descansoOrExercise(calExec)"
                            class="primary--text justify-center text-h5 px-3  d-inline-flex lighten-1"
                            @click="EjercicioDescripcion(calExec.name)"
          >
            <v-container>
              {{ calExec.name }}
            </v-container>
            <v-divider></v-divider>

            <v-container v-if="!isNaN(calExec.time) && calExec.time > 0">
              Duración:
              {{ calExec.time }}''
            </v-container>
            <v-container v-if="!isNaN(calExec.reps) &&calExec.reps >0">
              Reps: {{calExec.reps}}
            </v-container>

          </v-card>
          </v-col>
          </v-row>
        </v-container>


      </v-container>
    </v-carousel-item>



    <v-carousel-item order="2" :v-if="ejercitacion.length > 0" v-for="exercise in ejercitacion" :key="exercise.id">
      <v-container fluid class="accent fill-height mt-6">

        <v-row justify="space-around">
          <v-col cols="3">
            <p class="text-h4  primary--text"> {{ exercise.name }}:</p>
          </v-col>
          <v-col cols="3">
            <p class="text-h5  primary--text"> Número de repeticiones: {{exercise.repetitions}}</p>
          </v-col>
        </v-row>
        <v-container class="shrink">
          <v-row justify="center"   style="height: 10vh; margin-bottom: 4px" v-for="exerciseDescrip in exercise.metadata.ejercicios" :key="exerciseDescrip.name">
            <v-col cols="6"  >
              <v-card
                  min-width="700px"
                  rounded
                  :color="descansoOrExercise(exerciseDescrip)"
                  class="primary--text justify-center text-h5 px-3  d-inline-flex lighten-1"
              >
                <v-container>
                  {{ exerciseDescrip.name }}
                </v-container>
                <v-divider></v-divider>
                <v-container v-if="!isNaN(exerciseDescrip.time) && exerciseDescrip.time > 0">
                  Duración:
                  {{ exerciseDescrip.time }}''
                </v-container>
                <v-container v-if=" !isNaN(exerciseDescrip.reps) && exerciseDescrip.reps >0">
                  Reps: {{exerciseDescrip.reps}}
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-carousel-item>




    <v-carousel-item v-if="update">
      <v-container fluid class="accent fill-height mt-6">

        <v-row justify="space-around">
          <v-col cols="3">
            <p class="text-h4  primary--text"> {{ enfriamiento.name }}:</p>
          </v-col>
          <v-col cols="3">
            <p class="text-h5  primary--text"> Número de repeticiones: {{enfriamiento.repetitions}}</p>
          </v-col>
        </v-row>

        <v-container class="shrink">
          <v-row justify="center"  style="height: 10vh" v-for="calExec in enfriamiento.metadata.ejercicios" :key="calExec.name">
            <v-col cols="6"  >
              <v-card min-width="700px"
                      rounded
                      :color="descansoOrExercise(calExec)"
                      class="primary--text justify-center text-h5 px-3  d-inline-flex lighten-1"
              >
                <v-container>
                  {{ calExec.name }}
                </v-container>
                <v-divider></v-divider>
                <v-container v-if="!isNaN(calExec.time) && calExec.time > 0">
                  Duración:
                  {{ calExec.time }}''
                </v-container>
                <v-container v-if="!isNaN(calExec.reps) && calExec.reps >0">
                  Reps: {{calExec.reps}}
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-carousel-item>

  </v-carousel>




</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: "CarrouselParaCiclos",
  data: () => (
      {
        calentamiento: {detail:null,id:null,metadata: {ejercicios:null},name:null,order:null,repetitions:null,type:null},
        ejercitacion:[],
        enfriamiento:{detail:null,id:null,metadata:{ejercicios:null},name:null,order:null,repetitions:null,type:null},
        loading:false,
        update:false,
        }),
  methods:{
    descansoOrExercise(calExec) {
      return calExec.name === 'Descanso' ? 'grey': 'white';
    }
  },
  props:{
    routine:{
      type:Object,
      required:true
    }
  },
  computed:{
    ...mapGetters('routineCycle',['getRoutineCycle']),
  },

  async created(){
    this.loading=true

    await this.$store.dispatch('routineCycle/getAll',this.routine)
    this.loading=false
    let routinesCycle = this.getRoutineCycle
    this.calentamiento = routinesCycle[0]
    let i
    for( i = 1 ; i <  routinesCycle.length;i++ ){
      if( routinesCycle[i].name==='Enfriamiento' ){
        this.enfriamiento=routinesCycle[i]
      }
      else
        this.ejercitacion.push(routinesCycle[i])
    }
    setTimeout(()=>this.update=true,500)
  }
}
</script>