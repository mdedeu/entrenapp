<template>

  <v-container  fluid class="primary fill-height">
    <Loading v-if="loading"></Loading>



    <v-row>
      <v-col class="mt-10">
        <h1>Edita tu rutina</h1>
      </v-col>
    </v-row>


    <v-row justify="center">
      <h3 class="accent--text">Cámbiale el nombre a tu rutina</h3>
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
      <h3 class="accent--text">Cámbiale la descripción a la rutina</h3>
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
        <h3 class="accent--text">¿Tiene algún deporte relacionado?</h3>
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
        <v-alert v-if="error"
                 color="red"
                 type="error"
                 transition="scale-transition"
                 dismissible
                 @click="error=false"
                 id="error"
        >{{ this.message }}</v-alert>
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
      loading:false,
      sports:[{name:null}],
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
        this.message = 'La rutina debe tener el campo descripción'
        return this.error=true
      }

      if(this.descripcion.length > 200 ){
        this.error=true
        this.message="La descripcion de la rutina no puede tener mas de 200 caracteres"
        return
      }

      if(this.nombre !=null && this.nombre.length > 0   && this.sport_selected!=null && this.difficulty !=null)
        this.$emit('Info-received',{name:this.nombre,detail:this.descripcion,isPublic:true,difficulty:this.difficulty,metadata:{sport:this.sport_selected}})
      else {
        this.message = 'La rutina tiene que tener nombre, deporte asociado y dificultad'
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
    this.loading=false
    let element =document.getElementById(this.routine.difficulty)
    this.difficulty = this.routine.difficulty;
    element.classList.add('accent')

  },
}
</script>
<style scoped>
h3 {
  font-weight: normal;
}
</style>