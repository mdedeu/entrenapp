<template>
  <v-container fluid class="primary fill-height">
    <v-row> <HeaderApp></HeaderApp> </v-row>
    <v-row class="pt-10">
      <Back/>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <p class="text-h3 accent--text">Tus ejercicios</p>
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

export default {
  name: "TusEjercicios",
  components:{
    HeaderApp,
    Back,
    TusEj
  }
}
</script>