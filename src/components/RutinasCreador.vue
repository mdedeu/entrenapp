<template>
  <v-container fluid class="primary fill-height">
    <v-row>
      <v-col class="mt-10">
        <h1>Creá tu rutina</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <h3 class="accent--text">Selecciona el grupo Muscular</h3>
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
        <v-select
            v-model="muscle_selected"
            :items="muscles"
            label="Grupo Muscular"
            solo
            full-width
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center">
      <h3 class="accent--text"> Dale un nombre creativo a tu rutina</h3>
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
                id="Principiante"
                @click="addOutline('Principiante')"
            >Principiante
            </v-btn>
          </v-col>
      <v-col col="3">
        <v-btn
            rounded
            color="white"
            width="80%"
            class="black--text"
            id="Intermedio"
            @click="addOutline('Intermedio')"
        >Intermedio
        </v-btn>
      </v-col>
      <v-col col="3">
        <v-btn
            rounded
            color="white"
            width="80%"
            class="black--text"
            id="Avanzado"
            @click="addOutline('Avanzado')"
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
  </v-container>
</template>

<script>

export default {
  name: 'RutinasCreador',
  data() {
    return {
      sports: ['Futbol', 'Tenis', 'Hockey', 'Otro'],
      muscles: ['Pecho', 'Piernas','Brazos','Hombros','Otro'],
      difficulty: null,
      nombre: null,
      muscle_selected : null,
      sport_selected : null
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
    }
  }
}
</script>
<style scoped>
h3 {
  font-weight: normal;
}
</style>