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
        <v-col>  <v-text-field   label="Email"
                                 required
                                 solo
                                 prepend-inner-icon="mdi-email-outline"
        ></v-text-field> </v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col></v-col>
        <v-col>  <v-text-field label="Contraseña"
                               required
                               solo
                               prepend-inner-icon="mdi-lock-outline"
                               append-icon="mdi-eye-off-outline"
        ></v-text-field> </v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col>
        </v-col>
        <v-col class="text-center">
          <v-btn class="accent text--primary"  width="250" height="50" rounded>Ingresá</v-btn>
        </v-col>
        <v-col></v-col>
      </v-row>
    <v-row>
      <v-col></v-col>
      <v-col class="text-center mt-n3"><u><a class="grey--text">Olvidaste tu contraseña?</a></u></v-col>
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