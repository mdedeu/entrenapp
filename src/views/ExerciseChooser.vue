<template>
  <v-container fluid class="primary fill-height">
    <v-row>
      <v-col cols = 12><HeaderApp></HeaderApp></v-col>
    </v-row>
    <v-row>
      <v-col cols="2-11"><ExerciseFilterScroll></ExerciseFilterScroll></v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderApp from "../components/HeaderApp";
import ExerciseFilterScroll from "../components/ExerciseFilterScroll";



export default {
  name: "ExerciseChooser.vue",
  components: {
   HeaderApp,
    ExerciseFilterScroll,
  }
}
</script>

<style scoped>

</style>