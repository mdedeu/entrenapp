<template>
  <v-container class="mt-12">
    <v-row><v-col class="text-left text--yellow"><h1>Ejercicios favoritos</h1></v-col></v-row>
    <v-row><v-col class="text-left text--yellow"><h2>Active opciones para filtrar la busqueda</h2></v-col></v-row>
    <v-row>
        <!-- Panel izquierdo: selector de filtros -->
        <v-col class="primary">
          <!--Aca van los filtros que se pueden aplicar-->
          <v-row>
            <v-col align="center">
              <v-btn outlined rounded class="white">Pecho</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-btn outlined rounded class="white">Espalda</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-btn outlined rounded class="white">Triceps</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-btn outlined rounded class="white">Biceps</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-btn outlined rounded class="white">Piernas</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <v-btn outlined rounded class="white">Abdominales</v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-divider vertical="true" color="yellow"></v-divider>
        <!-- Panel derecho: vista y selector de ejercicios -->
        <v-col>
          <v-container style="max-height: 65vh" class="overflow-y-auto">
            <v-row>
              <v-col align="center" justify="center" style="height: 1000px" >
              </v-col>
            </v-row>
          </v-container>
        </v-col>

      </v-row>
  </v-container>
</template>
<script>
export default {
  name: "ExerciseFilterScroll.vue"
}
</script>

<style scoped>

</style>