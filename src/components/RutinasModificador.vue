<template>

  <v-container fluid class="primary fill-height">
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
        <v-text-field
            v-model="descripcion"
            label="Descripcion"
            solo
            background-color="white"
        ></v-text-field>
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

export default {
  name: 'RutinasModificador',
  data() {
    return {
      sports: ['Futbol', 'Tenis', 'Hockey', 'Ninguno'],
      difficulty: null,
      nombre: this.routineData.name,
      sport_selected : this.routineData.metadata.sport,
      error:false,
      publicRoutine:true,
      descripcion:this.routineData.detail,
      routineData: null,
      routineCycleData: null
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
  created(){
    if(!this.routine){
      this.routineData = ((JSON).parse(localStorage.getItem('vuex')))['cache']['propsData']['routine']
    }
    else{
      this.routineData = this.routine
      this.$store.dispatch('cache/setRoutine',this.routine)
    }

    if(!this.routineCycle){
      this.routineCycleData = ((JSON).parse(localStorage.getItem('vuex')))['cache']['propsData']['routineCycle']
    }else{
      this.routineCycleData = this.routineCycle
      this.$store.dispatch('cache/setRoutineCycle',this.routineCycle)
    }

    let element =document.getElementById(this.routineData.difficulty)
    this.difficulty = this.routineData.difficulty;
    element.classList.add('accent')
  }
}
</script>
<style scoped>
h3 {
  font-weight: normal;
}
</style>