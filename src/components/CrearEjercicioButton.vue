<template>
  <v-container>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="green"
            dark
            v-bind="attrs"
            v-on="on"
            rounded
            class="primary--text"
        >
          Crea tu Ejercicio
        </v-btn>
      </template>
      <v-card class="accent">
        <v-card-title>
          <span class="text-h4">Creá tu ejercicio</span>
        </v-card-title>
        <v-card-text>
            <v-row justify="center">
              <v-col cols="6">
                <h4 class="primary--text" >Nombre</h4>
                <v-text-field
                    v-model="nombre"
                    label="Nombre"
                    solo
                    background-color="white"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h4 class="primary--text mt-n6">Grupo múscular</h4>
              </v-col>
            </v-row>
            <v-row justify="center" v-for="exercise in exercises" :key="exercise.name">
              <v-col cols="3">
                <template>
                  <v-btn
                      rounded
                      width="100%"
                      :id="'crear-' + exercise.name"
                      @click="addColor(exercise.name)"
                  >{{exercise.name}}
                  </v-btn>
                </template>
                </v-col>
          </v-row>
            <v-row justify="center">
              <h4 class="primary--text mt-6"> ¿Vas a necesitar algún elemento adicional? </h4>
            </v-row>
            <v-row justify="center">
                <v-checkbox
                    label="Equipamiento extra"
                    color="primary"
                    hide-details
                    class="checkbox"
                ></v-checkbox>
            </v-row>

            <v-row justify="center">
                <h4 class="primary--text mt-6">Deportes relacionados</h4>
            </v-row>

            <v-row justify="center">
              <v-col cols="6">
                <v-select
                    v-model="selected_sport"
                    :items="sports"
                    label="Deporte"
                    solo
                    full-width
                ></v-select>
              </v-col>

            </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary darken-1"
              text
              @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
              color="primary darken-1"
              text
              @click="dialog = false"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CrearEjercicio",
  data() {
    return {
      dialog:false,
      sports: ['Fútbol', 'Voley', 'Tenis', 'Paddle'],
      exercises: [{name: 'Abdominales' }, {name: 'Espalda'}, {name: 'Brazos'}, {name: 'Pecho'}],
      selected_sport: null,
    }
  },
  methods : {
    addColor(name){
      let element =document.getElementById('crear-'+name)

      if(!this.selected_muscle){
        this.selected_muscle = name;
        element.classList.add('primary')
      }else{
        if(this.selected_muscle === name){
          element.classList.remove('primary')
          this.selected_muscle = null;
        }
        else{
          document.getElementById('crear-'+ this.selected_muscle).classList.remove('primary')
          this.selected_muscle = name;
          console.log(this.selected_muscle)
          element.classList.add('primary')
        }
      }
    }
  }
}
</script>

<style scoped>
.checkbox{
  margin: auto;
}
</style>