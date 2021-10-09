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
          <v-btn rounded class="accent primary--text">
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
          <v-row class="pt-6 pl-6" justify="space-around" v-for="exercise in exercises" :key="exercise.name">
            <DescriptiveExcercise :name = "exercise.name" difficulty = "Intermedia" category = "Pecho" ></DescriptiveExcercise>
          </v-row>
        </v-container>

      </v-col>
    </v-row>
  </v-container>
</template>


<script>


import DescriptiveExcercise from "./DescriptiveExcercise";
export default {
  name: 'PopupSeleccionarEjercicio',
  components: {DescriptiveExcercise},
  data(){
    return {
      muscles:[{name:"Piernas"},{name:"Pecho"},{name:"Brazos"},{name:"Abdominales"},{name:"Espalda"}],
      exercises:[{name:"Flexiones de brazo"},{name:"Abdominales bolita"},{name:"Salto con soga"},{name:"Estirar piernas"},{name:"Espalda en colchoneta"}],
      sports: ['Fútbol', 'Hockey','Tenis','Paddle'],
      selected_sport: null,
      selected_muscle: null
    }
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
          console.log(this.selected_muscle)
          element.classList.add('accent')
        }
      }
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