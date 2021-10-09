<template>
  <v-container fluid class="primary fill-height">
    <v-row> <HeaderApp></HeaderApp> </v-row>
    <v-row class="pt-10">
      <Back/>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <h1 class="accent--text text-h3">Tus ejercicios</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
        <v-col cols="3">
          <CrearEjercicioButton></CrearEjercicioButton>
        </v-col>
    </v-row>
    <v-row style="height: 90vh">
      <v-col>
        <TusEj></TusEj>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import HeaderApp from '../components/HeaderApp'
import Back from '../components/Back'
import TusEj from '../components/TusejerciciosComponent'
import CrearEjercicioButton from "../components/CrearEjercicioButton";

export default {
  name: "TusEjercicios",
  components:{
    CrearEjercicioButton,
    HeaderApp,
    Back,
    TusEj
  },
  props : ['title']
}
</script>