<template>
  <v-container fluid  fill-height class="primary">
      <v-row class="mt-16">
        <v-col></v-col>
        <v-col >
          <router-link :to= "{name: 'Home'}">
            <v-img src = "../assets/logo.png" class="mr-auto ml-auto" alt="logo" width="50%"/>
          </router-link>
       </v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col></v-col>
        <v-col>  <v-text-field   label="Usuario"
                                 required
                                 solo
        ></v-text-field> </v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col></v-col>
        <v-col>  <v-text-field label="Contraseña"
                               required
                               solo
        ></v-text-field> </v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col>
        </v-col>
        <v-col class="text-center">
          <v-btn class="mt-3">Ingresá</v-btn>
        </v-col>
        <v-col></v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login.vue"
}
</script>

<style scoped>

</style>