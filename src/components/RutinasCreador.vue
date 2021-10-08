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
            >Principiante
            </v-btn>
          </v-col>
      <v-col col="3">
        <v-btn
            rounded
            color="white"
            width="80%"
            class="black--text"
        >Intermedio
        </v-btn>
      </v-col>
      <v-col col="3">
        <v-btn
            rounded
            color="white"
            width="80%"
            class="black--text"
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
      muscles: ['Pecho', 'Piernas','Brazos','Hombros']
    }
  }
}
</script>
<style scoped>
h3{
  font-weight: normal;
}
</style>