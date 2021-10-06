<template>
  <v-container fluid class="primary fill-height">
    <v-row>
      <v-col cols = 12><HeaderApp></HeaderApp></v-col>
    </v-row>
    <v-row>
      <v-col>
        <BuscadorRutinas/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BuscadorRutinas from '../components/BuscadorRutinas'
import HeaderApp from '../components/HeaderApp'
export default {
  name: "TusRutinas",
  components:{
    BuscadorRutinas,
    HeaderApp
  }
}
</script>

<style scoped>

</style>