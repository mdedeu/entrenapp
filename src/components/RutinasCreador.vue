<template>
  <v-container fluid class="primary fill-height">
    <Back/>
    <v-row>
      <v-col class="yellow--text text-h3">
          Información de la rutina
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-text-field
            label="Nombre"
            solo
            background-color="white"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
          <v-col col="6" class="yellow--text text-h3">
            Nivel de dificultad:
          </v-col>
          <v-col col="2" v-for="difficultLevel in difficulty" :key="difficultLevel.level">
            <v-btn
                rounded
                color="white"
                width="100%"
                class="black--text"
            >{{difficultLevel.level}}
            </v-btn>
          </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-text-field
            label="Deportes relacionados"
            solo
            background-color="white"
        ></v-text-field>
      </v-col>
    </v-row>



  </v-container>
</template>

<script>

import Back from './Back'
export default {
  name: 'RutinasCreador',
  components: {
    Back
  },
  data() {
    return {
      difficulty: [{level: 'Principiante'}, {level: 'Intermedio'}, {level: 'Avanzado'}]
    }
  }
}
</script>