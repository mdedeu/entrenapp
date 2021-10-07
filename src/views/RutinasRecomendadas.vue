<template>
  <v-container fluid class="primary fill-height">
    <v-row style="height: 50px">
      <v-col cols = "12"><HeaderApp/></v-col>
    </v-row>
    <v-row>
        <Back/>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <h2 class="accent--text text-h3">Rutinas recomendadas</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <FiltroRutinas></FiltroRutinas>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import HeaderApp from "../components/HeaderApp";
import Back from '../components/Back'
import FiltroRutinas from '../components/FiltroRutinas'

export default {
  name: "RutinasRecomendadas",
  components:{
    HeaderApp,
    Back,
    FiltroRutinas
  }
}
</script>

<style scoped>

</style>