<template>
  <v-container fluid class="primary fill-height">
    <v-row> <HeaderApp></HeaderApp> </v-row>
    <v-row class="pt-10">
      <Back/>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <p class="text-h3 accent--text">Ejercicios Favoritos</p>
      </v-col>
    </v-row>
    <v-row style="height: 90vh">
      <v-col>
        <TusejerciciosComponent :slug="'favoritas'"></TusejerciciosComponent>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import HeaderApp from "../components/HeaderApp";
import Back from "../components/Back";
import TusejerciciosComponent from "../components/TusejerciciosComponent";

export default {
  name: "EjerciciosFavoritos",
  components: {Back, HeaderApp, TusejerciciosComponent}
}
</script>

<style scoped>

</style>