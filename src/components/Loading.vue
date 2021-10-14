<template>
  <v-container fluid class="primary fill-height">
    <v-row justify="center">
      <h1 class="accent--text">Cargando...</h1>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-progress-circular
            indeterminate
            color="accent"
        ></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "Loading",
}
</script>

<style scoped>

</style>