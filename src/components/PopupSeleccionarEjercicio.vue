<template>
  <Loading v-if="loading"></Loading>

  <v-container v-else class="primary">
    <v-row > <Close v-on:close-popup="closePopup()"></Close></v-row>
    <v-row class="accent--text mt-6" justify="space-around" >
      <v-col cols="6" >
        <v-row justify="center"><h4>Filtra</h4></v-row>
        <v-row justify="space-around">Por Grupo Muscular:</v-row>
        <v-row class="pt-6" justify="space-around" v-for="muscle in muscles" :key="muscle.name">
          <template>
            <v-btn
                rounded
                width="60%"
                class="primary--text"
                :id="muscle.auxName"
                @click="addColor(muscle)"
            >{{ muscle.name }}
            </v-btn>
          </template>
        </v-row>


        <v-row justify="space-around" class="mt-10 mb-n9">
          ¿Vas a necesitar alguna máquina o equipamiento extra?
        </v-row>
        <v-row justify="space-around" class="pt-6">
          <v-checkbox
              color="accent"
              label="Equipamiento Extra"
              hide-details
              v-model="equipacion"
              dark
          >
          </v-checkbox>
        </v-row>


        <v-row justify="center"><h4 class="accent--text mt-6 mb-n3">Por deporte</h4></v-row>
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
        <v-row>
          <v-col>
            <v-btn
            rounded
            class="accent primary--text"
            @click="filterHandler">
              Filtrar
            </v-btn>
          </v-col>
        </v-row>
      </v-col>


      <v-divider
          vertical
          color="accent"
      ></v-divider>

      <v-dialog
          v-model="viewExercise"
          persistent
          max-width="600px"
          class="primary"
      >
        <v-card color="primary"  class="pa-4" rounded>
          <h1 class="accent--text">Ejercicio: {{ this.currentExercise.name }}</h1>
          <v-list-item>
            <v-list-item-content class=" text-deco ma-3 font-weight-thin accent--text ">
              <v-list-item-title>
                Deporte
              </v-list-item-title>
              <v-list-item-subtitle class="white--text">
                Este ejercicio está orientado al {{this.currentExercise.metadata.deportes}}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content  class=" text-deco ma-3 font-weight-thin accent--text ">
              <v-list-item-title>Grupo muscular</v-list-item-title>
              <v-list-item-subtitle class=" white--text ">
                 {{this.currentExercise.metadata.musculos[0]}}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item three-line>
            <v-list-item-content  class=" text-deco ma-3 font-weight-thin accent--text ">
              <v-list-item-title>
                Equipamiento
              </v-list-item-title>
              <v-list-item-subtitle class="white--text">
                Este ejercicio {{this.currentExercise.metadata.equipacion ? "requiere" : "no require"}} equipamiento
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="accent"
              text
              @click="viewExercise=false"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
        </v-card>
      </v-dialog>

      <v-col cols="6" >
        <v-row justify="center" class="mb-4"><h4>Todos los resultados</h4></v-row>
        <v-container class="exercises">
        <v-row class="pt-6 pl-6 pr-6" justify="space-around" v-for="exercise in exercises" :key="exercise.name">
          <template>

            <v-card
                class="mx-auto"
                max-width="500"
                outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    {{exercise.category}}
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    {{exercise.name}}
                  </v-list-item-title>
                  <v-list-item-subtitle>Este ejercicio trabaja: {{exercise.metadata.musculos[0]}}. </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions class="justify-center">
                <v-btn
                    outlined
                    rounded
                    text
                    @click="viewExerciseHandler(exercise)"
                    class="accent"
                >
                  Ver ejercicio
                </v-btn>
                <v-btn
                    outlined
                    rounded
                    text
                    class="primary white--text"
                    @click="agregarPopup(exercise)">
                  Agregar este ejercicio
                </v-btn>
              </v-card-actions>
            </v-card>


            <v-dialog width="600px"  :value="agregar" :retain-focus="false">
              <v-container fluid  class="fill-height">
                <v-card  width="100%" class="primary mx-16" rounded>
                  <h1 class="font-weight-medium">Elije la duración</h1>
                  <v-row>
                    <v-col>
                      <h4 class=" font-weight-medium accent--text">Ingresa el número de repeticiones, si corresponde</h4>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="exercise_reps" solo label="Repeticiones" class=" mx-3 mt-6" :rules="rulesNumber" clearable></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h4 class=" font-weight-medium accent--text" :rules="rulesNumber">Ingresa el tiempo del ejercicio en segundos, si corresponde</h4>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field v-model="exercise_time" solo label="Tiempo" class=" mx-3 mt-6" clearable></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn class="accent primary--text mb-4"
                             @click="addExercise(
                                       {
                                       exercise: currentExerciseToAdd,
                             time: exercise_time,
                             reps: exercise_reps,
                             stage: stage,
                      })">
                        Guardar
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-container>
            </v-dialog>
          </template>
        </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-dialog :value="exito" width="500px">
      <v-card>
        <v-card-title class="text-h5 green lighten-2">
          Éxito
        </v-card-title>
        <v-card-text>
          Ejercicio agregado al ciclo de la rutina
        </v-card-text>
        <v-icon color="green" size="60">mdi-check</v-icon>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="closeAdd"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<script>

import Close from "./Close";
import {mapGetters} from "vuex";
import Loading from './Loading'
export default {
  name: 'PopupSeleccionarEjercicio',
  components: {Close,Loading},
  props: {
    isFav:{
      type: Boolean,
      required: true
    },
    //['stage']
    stage: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      loading : false,
      isFavText: null,
      currentExercise: {name: null, detail: null, type: null, metadata: {
          musculos:[],
          equipacion: null,
          deportes: null,
          favorito: null
        }},
      viewExercise: false,
      muscles:[{name:"Piernas", auxName: null},{name:"Pecho", auxName: null},{name:"Brazos", auxName: null},{name:"Abdominales", auxName: null},{name:"Espalda", auxName: null}],
      exercises: null,//[{name:"Flexiones de brazo", difficulty: 'Intermedio', category: 'Pecho'},{name:"Abdominales bolita", difficulty: 'Intermedio', category: 'Pecho'},{name:"Salto con soga", difficulty: 'Intermedio', category: 'Pecho'},{name:"Estirar piernas", difficulty: 'Intermedio', category: 'Pecho'},{name:"Espalda en colchoneta", difficulty: 'Intermedio', category: 'Pecho'}],
      favouriteExercises: null,
      sports: null,
      selected_muscle:{
        name: null,
        auxName: null
      },
      selected_sport: null,
      agregar : false,
      exercise_time: null,
      exercise_reps: null,
      currentExerciseToAdd : {},
      rulesNumber: [v => (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) || 'Tiene que ser un numero entre 0 y 999 '],
      exito:false,
      equipacion:false
    }
  },
  computed:{
    ...mapGetters('exercise', {
      $getFavouriteExercises : 'getFavourites',
      $getExercises : 'getMine',
    }),
    ...mapGetters('exercise',['getMine']),
    ...mapGetters('exercise',['getMuscle']),
    ...mapGetters('exercise',['getEquipacion']),
    ...mapGetters('exercise',['getDeporte']),
    ...mapGetters('exercise', ['getFavourites'])
  },
  async created() {
    this.loading = true
    await this.$store.dispatch('sport/getAll')
    this.sports = this.$store.getters['sport/getSports'].map((item) => item.name)
    await this.$store.dispatch('exercise/getAll')
    this.loading  = false

    if(this.isFav){
      this.exercises = this.$getFavouriteExercises
    } else {
      this.exercises = this.$getExercises
    }
    this.isFavText = this.isFav ? "f" : "nf"

    this.muscles.forEach((muscle) => {
      muscle.auxName = muscle.name + this.isFavText + this.stage
    })
    this.setMyExercises()
  },
  methods:{
    filterHandler(){
      this.reassign()
    },
    reassign(){
      this.setMyExercises()
      if(this.equipacion)
        this.exercises = this.exercises.filter( (item)=> this.getEquipacion.includes(item) )
      if(this.selected_muscle.name)
        this.exercises = this.exercises.filter( (item) => this.getMuscle(this.selected_muscle.name).includes(item) )
      if(this.selected_sport)
        this.exercises = this.exercises.filter( (item) => this.getDeporte(this.selected_sport).includes(item) )
    },
    setMyExercises(){
      if(this.isFav){
        this.exercises = this.$getFavouriteExercises
      } else {this.exercises = this.$getExercises}
    },
    makeCleanup(){
      this.selected_muscle={name:null, auxName:null}
      this.selected_sport=null
      this.equipacion=false
      this.setMyExercises()
    },
    viewExerciseHandler(exercise){
      this.viewExercise=true
      this.currentExercise=exercise
    },
    EjercicioDescripcion(exercise){
      this.$router.push({name: 'EjercicioDescripcion', params: {exercise: exercise}})
    },
    closePopup() {
      this.makeCleanup()
      this.muscles.forEach((musc)=> {
        document.getElementById(musc.auxName).classList.remove('accent')
      })
      this.$emit('close-popup')
    },
    closeAdd(){
      this.exito = false
      this.agregar= false
    },
    agregarPopup(exercise){
      this.agregar = true
      this.currentExerciseToAdd = exercise;
    },
    addExercise(event){
      if(!isNaN(this.exercise_reps) || !isNaN(this.exercise_time)){
        this.$emit('add-exercise',event)
        this.exito= true
        this.exercise_time = null
        this.exercise_reps = null
      }
    },
    addColor(muscle){
      let element =document.getElementById(muscle.auxName)
      if(!this.selected_muscle.name){
        this.selected_muscle = muscle;
        element.classList.add('accent')
      }else{
        if(this.selected_muscle.auxName === muscle.auxName){
          element.classList.remove('accent')
          this.selected_muscle = {name: null, auxName: null}
        }
        else{
          document.getElementById(this.selected_muscle.auxName).classList.remove('accent')
          this.selected_muscle = muscle;
          element.classList.add('accent')
        }
      }
    }
  }

}

</script>
<style scoped>
.exercises{
  max-height: 500px;
  overflow: auto;
}
</style>