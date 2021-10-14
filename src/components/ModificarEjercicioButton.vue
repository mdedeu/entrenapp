<template>
  <Loading v-if="loading"></Loading>

  <v-container v-else>
    <v-row justify="center">
      <template>
      <v-dialog
          v-model="dialog"
          persistent
          max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="yellow"
              dark
              v-bind="attrs"
              v-on="on"
              class="primary--text"
              @click="loadInfo"
          >
            <v-icon left>
              mdi-pencil-outline
            </v-icon>
            Editar ejercicio
          </v-btn>
        </template>
        <v-card class="accent">
          <v-card-title>
            <span class="text-h4">Edita el ejercicio</span>
          </v-card-title>
          <v-card-text>
            <v-row justify="center">
              <v-col cols="6">
                <h4 class="primary--text" >Nombre</h4>
                <v-text-field
                    required
                    :rules="rules.length"
                    v-model="nombre"
                    label="Nombre"
                    solo
                    background-color="white"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h4 class="primary--text mt-n6">Grupo muscular</h4>
              </v-col>
            </v-row>
            <v-row justify="center" v-for="exercise in exercises" :key="exercise.name">
              <v-col cols="3">
                <template>
                  <v-btn
                      rounded
                      width="100%"
                      :id="'crear-' + exercise.name"
                      @click="muscleHandler(exercise.name)"
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
                  v-model="equip"
                  :false-value="false"
                  :true-value="true"
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
                @click="closeHandler"
            >
              Cancelar
            </v-btn>


            <v-btn
                color="primary darken-1"
                text
                @click="guardarHandler"
            >
              Guardar
            </v-btn>

            <v-dialog
              :value="popup"
              width="500"
              transition="dialog-bottom-transition"
              >
              <v-card>
                <v-card-title class="text-h5 green lighten-2">
                  Éxito
                </v-card-title>
                <v-card-text>
                  Ejercicio editado correctamente
                </v-card-text>
                <v-icon color="green" size="60">mdi-check</v-icon>

                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="closeHandler"
                >
                  OK
                </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog
                :value="error_popup"
                width="500"
                transition="dialog-bottom-transition"
            >
              <v-card>
                <v-card-title class="text-h5 red lighten-2">
                  Error
                </v-card-title>
                <v-card-text>
                  Falta información sobre el {{this.error}}
                </v-card-text>
                <v-icon color="red" size="60">mdi-close</v-icon>

                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="primary"
                      text
                      @click="errorHandler"
                  >
                    OK
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>


          </v-card-actions>
        </v-card>
      </v-dialog>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import Loading from './Loading'

export default {
  name: "ModificarEjercicio",
  components:{Loading},
  data() {
    return {
      loading:false,
      error_popup: false,
      error: null,
      popup: false,
      rules: {
        length:[ val => (val || '').length > 0 || 'Este campo es obligatorio' ]
      },
      dialog_message:false,
      dialog:false,
      sports: ['Fútbol', 'Hockey', 'Tenis', 'Paddle'],
      exercises: [{name: 'Piernas'}, {name: 'Abdominales' }, {name: 'Espalda'}, {name: 'Brazos'}, {name: 'Pecho'}],
      selected_sport: null,
      equip: false,
      selected_muscle: null,
      nombre: null,
    }
  },
  props:{
    slug:{
      type:Object,
      required:true
    }
  },
  methods : {
    async loadInfo(){
      this.nombre=this.slug.name
      this.selected_sport=this.slug.metadata.deportes
      this.equip=this.slug.metadata.equipacion
    },
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
    },
    muscleHandler(exercise_name){
      this.addColor(exercise_name)
    },
    async guardarHandler(){
      if(this.nombre==="" || this.nombre===null) {
        this.error_popup=true;
        this.error="nombre"
        return
      }
      if(this.selected_muscle===null){
        this.error_popup=true;
        this.error="musculo"
        return
      }
      const exercise = {id:this.slug.id, name:this.nombre, detail:"", type:"exercise", metadata:{
          musculos: [this.selected_muscle],
          equipacion: this.equip,
          deportes: this.selected_sport,
          favorito: this.slug.metadata.favorito
        }}
      this.loading = true
      await this.$store.dispatch('exercise/modify', exercise)
      await this.$store.dispatch('exercise/getAll')
      await this.$store.dispatch('exercise/get', exercise)
      this.loading = false
      this.$emit('guardar-ejercicio')
      this.openPopup()
    },
    openPopup(){
      this.popup=true
    },
    OKHandler(){
      this.dialog_message = false
    },
    errorHandler(){
      this.error_popup=false
    },
    closeHandler(){
      this.popup=false
      this.dialog = false
      this.nombre=null
      this.selected_muscle=null
      this.selected_sport=null
      this.equip=false
      this.exercises.forEach((exercise)=> {
        document.getElementById('crear-'+exercise.name).classList.remove("primary")
      })
    },
  },

  created() {
    this.last_muscle=this.slug.metadata.musculos[0]
  }

}
</script>

<style scoped>
.checkbox{
  margin: auto;
}
</style>