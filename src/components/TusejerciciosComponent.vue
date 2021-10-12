<template>
  <v-container fluid>
    <v-row class="accent--text" justify="space-around" >
      <v-col cols="6" >
        <v-row justify="center">
          <h2 class="font-weight-medium">Filtra por nivel de dificultad, duración y más</h2>
        </v-row>
        <v-row class="pl-16" justify="space-around">Grupo Muscular:</v-row>
        <v-row class="pt-6" justify="space-around" v-for="muscle in muscles" :key="muscle.name">
          <template>
            <v-btn
                rounded
                class="primary--text"
                width="60%"
                :id="muscle.name"
                @click="addColor(muscle.name)"
            >{{ muscle.name }}
            </v-btn>
          </template>
        </v-row>

        <v-row justify="space-around" class="mt-10 mb-n9">
          ¿Vas a necesitar alguna máquina o equipación extra?
        </v-row>
        <v-row justify="space-around" class="pt-6">
          <v-checkbox
              color="accent"
              label="Equipación Extra"
              hide-details
              v-model="equipacion"
              dark
          >
          </v-checkbox>
        </v-row>

        <v-row justify="space-around" class="pt-6" >
          <v-col cols="4">
            <v-select
                v-model="selected_sport"
                :items="sports"
                label="Deporte"
                solo
                full-width
            ></v-select>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn rounded class="accent primary--text"
          @click="reassign"
          >
            Filtrar
          </v-btn>
        </v-row>
      </v-col>


      <v-divider class="accent"
          vertical
      ></v-divider>

      <v-col cols="6" >
        <h2 class="mb-3 font-weight-medium">Todos los resultados</h2>
        <v-container class="exercises">
          <v-row class="pt-6 pl-6" justify="space-around" v-for="exercise in filtered" :key="exercise.name">
            <DescriptiveExcercise :exercise-des="exercise" ></DescriptiveExcercise>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>


import DescriptiveExcercise from "./DescriptiveExcercise";
import {mapGetters} from "vuex";
export default {
  name: 'PopupSeleccionarEjercicio',
  components: {DescriptiveExcercise},
  data(){
    return {
      loading : false,
      name : null,
      muscles:[{name:"Piernas"},{name:"Pecho"},{name:"Brazos"},{name:"Abdominales"},{name:"Espalda"}],
      sports: ['Fútbol', 'Hockey','Tenis','Paddle'],
      selected_sport: null,
      selected_muscle: null,
      equipacion:false,
      exercises:null,
      filtered:null
    }
  },
  props:{
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters('security',{
      user: 'getUser',
    }),
    ...mapGetters('exercise',['getMine']),
    ...mapGetters('exercise',['getMuscle']),
    ...mapGetters('exercise',['getEquipacion']),
    ...mapGetters('exercise',['getDeporte']),
    ...mapGetters('exercise', ['getFavourites'])

  },
  async created() {
    await this.loadExercises()
  },
  methods:{
    addColor(id){
      let element =document.getElementById(id)

      if(!this.selected_muscle){
        this.selected_muscle = id;
        element.classList.add('accent')
      }else{
        if(this.selected_muscle === id){
          element.classList.remove('accent')
          this.selected_muscle = null;
        }
        else{
          document.getElementById(this.selected_muscle).classList.remove('accent')
          this.selected_muscle = id;
          element.classList.add('accent')
        }
      }
    },
    reassign(){
        this.filtered = this.exercises
        if(this.equipacion)
          this.filtered = this.filtered.filter( (item)=> this.getEquipacion.includes(item) )
        if(this.selected_muscle)
          this.filtered = this.filtered.filter( (item) => this.getMuscle(this.selected_muscle).includes(item) )
      if(this.selected_sport)
        this.filtered = this.filtered.filter( (item) => this.getDeporte(this.selected_sport).includes(item) )
    },
    async loadExercises(){
      this.loading = true;
      await this.$store.dispatch("exercise/getAll")
      this.loading = false;
      if(this.slug !== 'favoritas') {
        this.exercises = this.getMine
      }
      else{
        this.exercises = this.getFavourites
      }
      this.filtered = this.exercises
    }
  }

}

</script>
<style scoped >
.exercises{
  overflow: auto;
  max-height: 35em;
}
</style>