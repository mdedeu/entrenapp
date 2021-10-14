<template>
  <Loading v-if="loading"></Loading>

  <v-container v-else fluid class="primary fill-height">
    <v-row v-if="error"><v-col>
      <p class="text-h3 red--text" >Todos los campos son obligatorios</p>
    </v-col></v-row>

    <v-row>
      <v-col class="mt-10">
        <h1>Edita tu rutina</h1>
      </v-col>
    </v-row>


    <v-row justify="center">
      <h3 class="accent--text"> Cambiale el nombre a tu rutina</h3>
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
        <v-text-field
            v-model="nombre"
            label="Nombre"
            solo
            background-color="white"
        ></v-text-field>
      </v-col>
    </v-row>


    <v-row justify="center" v-if="publicRoutine">
      <h3 class="accent--text"> Cambiale la descripcion a la rutina</h3>
    </v-row>
    <v-row justify="center" v-if="publicRoutine">
      <v-col cols="4">
        <v-textarea
            v-model="descripcion"
            label="Descripcion"
            solo
            background-color="white"
        ></v-textarea>

      </v-col>
    </v-row>



    <v-row>
      <v-col col="6">
        <h3 class="accent--text">Selecciona el nivel de dificultad:</h3>
      </v-col>
    </v-row>

    <v-row >
          <v-col col="3">
            <v-btn
                rounded
                color="white"
                width="80%"
                class="black--text"
                id="rookie"
                @click="addOutline('rookie')"
            >Principiante
            </v-btn>
          </v-col>
      <v-col col="3">
        <v-btn
            rounded
            color="white"
            width="80%"
            class="black--text"
            id="intermediate"
            @click="addOutline('intermediate')"
        >Intermedio
        </v-btn>
      </v-col>
      <v-col col="3">
        <v-btn
            rounded
            color="white"
            width="80%"
            class="black--text"
            id="expert"
            @click="addOutline('expert')"
        >Avanzado
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3 class="accent--text">¿Tiene algun deporte relacionado?</h3>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
            <v-select
                v-model="sport_selected"
                :items="sports"
                label="Deporte"
                solo
                full-width
            ></v-select>
      </v-col>
    </v-row>
    <v-row class="primary ">
      <v-col>
        <v-btn rounded class="accent text--primary mt-10 mb-16" @click="SendInfo">Siguiente</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Loading from './Loading'
export default {
  name: 'RutinasModificador',
  components:{Loading},
  data() {
    return {
      sports:null,
      difficulty: null,
      nombre: this.routine.name,
      sport_selected : this.routine.metadata.sport,
      error:false,
      publicRoutine:true,
      descripcion:this.routine.detail,
    }
  },
  methods : {
    addOutline(id){
      let element =document.getElementById(id)

      if(!this.difficulty){
        this.difficulty = id;
        element.classList.add('accent')
      }else{
        if(this.difficulty === id){
          element.classList.remove('accent')
          this.difficulty = null;
        }
        else{
          document.getElementById(this.difficulty).classList.remove('accent')
          this.difficulty = id;
          element.classList.add('accent')
        }
      }
    },
    SendInfo(){
      if(this.publicRoutine && this.descripcion==null){
        return this.error=true
      }



      if(this.nombre != null  && this.sport_selected!=null && this.difficulty !=null)
        this.$emit('Info-received',{name:this.nombre,detail:this.descripcion,isPublic:true,difficulty:this.difficulty,metadata:{sport:this.sport_selected}})
      else {
        this.error=true
      }
    }
  },
  props:{
    routine:{
      type:Object,
      required:true
    },
    routineCycle:{
      type:[],
      required:true
    }
  },
  async mounted(){
    this.loading = true
    await this.$store.dispatch('sport/getAll')
    this.sports = this.$store.getters['sport/getSports'].map((item) => item.name)
    this.loading = false
    let element =document.getElementById(this.routine.difficulty)
    this.difficulty = this.routine.difficulty;
    element.classList.add('accent')
  }
}
</script>
<style scoped>
h3 {
  font-weight: normal;
}
</style>