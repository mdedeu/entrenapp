<template>
  <v-container fluid class="primary fill-height">
    <v-row class="mt-10">
      <v-col align ="center">
        <v-img src="@/assets/404.png" width="500" height="500"></v-img>
      </v-col>
    </v-row>
    <v-row class="mt-16 mb-10">
      <v-col align="center" cols="12">
      <h1 class="accent--text">Por favor vuelva a intentar con una URL valida</h1>
        <Back></Back>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import Back from "../components/Back";
export default {
  name: "NotFound",
  components: {Back}
}
</script>

<style scoped>

</style>