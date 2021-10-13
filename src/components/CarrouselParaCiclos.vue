<template>
  <v-carousel >

    <v-carousel-item order="1">
      <v-container fluid class="accent fill-height">

        <v-row justify="space-around">
          <v-col cols="3">
            <p class="text-h4 primary--text"> {{this.calentamiento.name}}:</p>
          </v-col>
          <v-col cols="3">
            <p class="text-h5  primary--text"> Número de repeticiones: {{this.calentamiento.repetitions}}</p>
          </v-col>
        </v-row>

        <v-row justify="center"  style="height: 10vh" v-for="calExec in this.calentamiento.metadata.ejercicios" :key="calExec.name">
          <v-col cols="6"  >
            <v-btn width="100%"
                   rounded
                   color="white"
                   class="primary--text justify-center text-h5 mt-n5"
                   height="100%"
                   @click="EjercicioDescripcion(calExec)"
            >
              {{ calExec.name }}
              <v-icon
                  x-large
                  color="primary"
                  class="pl-10 pr-5"
              >
                mdi-timer
              </v-icon>
              {{ calExec.time }}''
            </v-btn>
          </v-col>
        </v-row>

      </v-container>
    </v-carousel-item>



    <v-carousel-item order="2" :v-if="ejercitacion.length > 0" v-for="exercise in ejercitacion" :key="exercise.id">
      <v-container fluid class="accent fill-height">

        <v-row justify="space-around">
          <v-col cols="3">
            <p class="text-h4  primary--text"> {{ exercise.name }}:</p>
          </v-col>
          <v-col cols="3">
            <p class="text-h5  primary--text"> Número de repeticiones: {{exercise.repetitions}}</p>
          </v-col>
        </v-row>

        <v-row justify="center"   style="height: 10vh" v-for="exerciseDescrip in exercise.metadata.ejercicios" :key="exerciseDescrip.name">
          <v-col cols="6"  >
            <v-btn width="100%"
                   rounded
                   color="white"
                   class="primary--text justify-center text-h5 mt-n5"
                   height="100%"
                   @click="EjercicioDescripcion(exerciseDescrip)"
            >
              {{ exerciseDescrip.name }}
              <v-icon
                  x-large
                  color="primary"
                  class="pl-10 pr-5"
              >
                mdi-timer
              </v-icon>
              {{ exerciseDescrip.time }}''
            </v-btn>
          </v-col>
        </v-row>

      </v-container>
    </v-carousel-item>




    <v-carousel-item v-if="update">
      <v-container fluid class="accent fill-height">

        <v-row justify="space-around">
          <v-col cols="3">
            <p class="text-h4  primary--text"> {{ enfriamiento.name }}:</p>
          </v-col>
          <v-col cols="3">
            <p class="text-h5  primary--text"> Número de repeticiones: {{enfriamiento.repetitions}}</p>
          </v-col>
        </v-row>

        <v-row justify="center"  style="height: 10vh" v-for="calExec in enfriamiento.metadata.ejercicios" :key="calExec.name">
          <v-col cols="6"  >
            <v-btn width="100%"
                   rounded
                   color="white"
                   class="primary--text justify-center text-h5 mt-n5"
                   height="100%"
                   @click="EjercicioDescripcion(calExec)"
            >
              {{ calExec.name }}
              <v-icon
                  x-large
                  color="primary"
                  class="pl-10 pr-5"
              >
                mdi-timer
              </v-icon>
              {{ calExec.time }}''
            </v-btn>
          </v-col>
        </v-row>

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
        routineData: null
        }),
  methods:{
    EjercicioDescripcion(exercise){
      this.$router.push({name:"EjercicioDescripcion",params:{exercise: exercise}})
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

    if(!this.routine){
        this.routineData = ((JSON).parse(localStorage.getItem('vuex')))['cache']['propsData']['routine']
    }
    else{
      this.routineData = this.routine
      this.$store.dispatch('cache/setRoutine',this.routine)
    }

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