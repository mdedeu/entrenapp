<template>

  <v-container fluid class="primary fill-height">
    <v-row style="height: 50px">
      <v-col cols = "12"><HeaderApp/></v-col>
    </v-row>
    <v-row class="mt-6">
      <Back></Back>
    </v-row>
    <v-row justify="center">
      <v-col cols="3">
        <h2 class="accent--text text-h3">Rutinas  {{this.slug}}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <FiltroRutinas :slug="this.slug"></FiltroRutinas>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import HeaderApp from "./HeaderApp";
import FiltroRutinas from "./FiltroRutinas";
import Back from "./Back";
export default {
  name: "PantallaDividida",
  components: {Back, FiltroRutinas, HeaderApp},
  props : {
    slug:{
      type:String,
      required:true
    }
  },

}
</script>

<style scoped>

</style>