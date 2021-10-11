<template>
  <v-container class="primary">
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
                :id="muscle.name"
                @click="addColor(muscle.name)"
            >{{ muscle.name }}
            </v-btn>
          </template>
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
            class="accent primary--text">
              Filtrar
            </v-btn>
          </v-col>
        </v-row>
      </v-col>


      <v-divider
          vertical
          color="accent"
      ></v-divider>

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
                  <v-list-item-subtitle>Esta ejercicio tiene dificultad {{exercise.difficulty}}. </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions class="justify-center">
                <v-btn
                    outlined
                    rounded
                    text
                    @click="EjercicioDescripcion"
                    class="accent"
                >
                  Ir al Ejercicio
                </v-btn>
                <v-btn
                    outlined
                    rounded
                    text
                    class="primary white--text"
                    @click="addExercise(exercise)">
                  Agregar este ejercicio
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

import Close from "./Close";
export default {
  name: 'PopupSeleccionarEjercicio',
  components: {Close},
  data(){
    return {
      muscles:[{name:"Piernas"},{name:"Pecho"},{name:"Brazos"},{name:"Abdominales"},{name:"Espalda"}],
      exercises:[{name:"Flexiones de brazo", difficulty: 'Intermedio', category: 'Pecho'},{name:"Abdominales bolita", difficulty: 'Intermedio', category: 'Pecho'},{name:"Salto con soga", difficulty: 'Intermedio', category: 'Pecho'},{name:"Estirar piernas", difficulty: 'Intermedio', category: 'Pecho'},{name:"Espalda en colchoneta", difficulty: 'Intermedio', category: 'Pecho'}],
      sports: ['Futbol','Hockey', 'Otros'],
      selected_muscle: null,
      selected_sport: null
    }
  },
  methods:{
    EjercicioDescripcion(){
      this.$router.push({name:"EjercicioDescripcion"})
    },
    closePopup() {
      this.$emit('close-popup')
    },
    addExercise(exercise){
      this.$emit('add-exercise',exercise)
      console.log('PopupSeleccionarEjercicio')
    },
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
          console.log(this.selected_muscle)
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