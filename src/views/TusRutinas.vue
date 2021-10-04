<template>
  <v-container fluid class="primary fill-height mt=16" height="300px">
    <v-row style="height: 50px">
    <HeaderApp></HeaderApp>
    </v-row>
      <v-row  align="center" justify="center">
        <v-col cols="3" align="center" justify="center">
          <h1 class="mb7 accent--text">Tus Rutinas</h1>
        </v-col>
      </v-row>
    <v-row align="center" justify="center" >
      <v-col align="center" justify="center" cols="3">
        <v-text-field
            -icon="mdi-magnify"
          class="white"
          label="Nombre"
          rounded
          height="10px"
      ></v-text-field>
      </v-col>
    </v-row>
    <v-row style="height: 10px"></v-row>
    <v-row>
    </v-row>
    <v-row align="center" justify="center" >
      <v-col align="center" justify="center">
        <v-btn class="black--text" rounded color="white" width="800" height="60">
          Rounded Button
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
    </v-row>
    <v-row align="center" justify="center" >
      <v-col align="center" justify="center">
        <v-btn class="black--text" rounded color="white" width="800" height="60">
          Rounded Button
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
    </v-row>
    <v-row align="center" justify="center" >
      <v-col align="center" justify="center">
        <v-btn class="black--text" rounded color="white" width="800" height="60">
          Rounded Button
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
    </v-row>
    <v-row align="center" justify="center" >
      <v-col align="center" justify="center">
        <v-btn class="black--text" rounded color="white" width="800" height="60">
          Rounded Button
        </v-btn>
      </v-col>
    </v-row>
    <v-row style="height: 30px">
    </v-row>
  </v-container>
</template>

<script>
import HeaderApp from "../components/HeaderApp";

export default {
  name: 'TusRutinas',
  components: {
    HeaderApp,
  }
}
</script>

<style scoped>

</style>