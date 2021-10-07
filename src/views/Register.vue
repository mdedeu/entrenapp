<template>
  <v-container fluid  fill-height class="primary">
    <v-row class="mt-16">
      <v-col/>
      <v-col>
        <router-link :to="{name: 'Home'}">
          <v-img src = "../assets/logo.png" class="mr-auto ml-auto" alt="logo" width="25%"/>
        </router-link>
          </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col>  <v-text-field   label="Nombre y Apellido"
                               required
                               solo
                               prepend-inner-icon="mdi-account"
                               v-model="name"
                               outlined
      ></v-text-field> </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col>  <v-text-field   label="Email"
                               required
                               solo
                               prepend-inner-icon="mdi-email-outline"
                               v-model="email"
                               outlined
      ></v-text-field> </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col>  <v-text-field label="Contraseña"
                             required
                             solo
                             prepend-inner-icon="mdi-lock-outline"
                             v-model="password"
                             :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                             :type="show ? 'text' : 'password'"
                             @click:append="changeShow"
                             outlined
      ></v-text-field> </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col>  <v-text-field label="Confirmar Contraseña"
                             required
                             solo
                             prepend-inner-icon="mdi-lock-outline"
                             v-model="confirm_password"
                             :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                             :type="show ? 'text' : 'password'"
                             @click:append="changeShow"
                             outlined
      ></v-text-field> </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col class="text-center">
        <v-btn class="accent text--primary" width="250" height="50" rounded>Registrate</v-btn>
      </v-col>
      <v-col/>
    </v-row>
    <v-row>
      <v-col/>
      <v-col class="text-center mt-n3"><u><router-link :to="{name: 'Login'}">
        <a class="grey--text"> Ya tenes una cuenta?</a></router-link></u></v-col>
      <v-col/>
    </v-row>
    <v-row style="height: 150px"></v-row>
  </v-container>
</template>

<script>

export default {
  name: "Register",
  data() {
    return{
      name : null,
      email : null,
      password : null,
      confirm_password : null,
      show: false
    }
  },
  methods :{
    changeShow(){
      this.show = !this.show ;
    }
  }
}
</script>

<style scoped>

</style>