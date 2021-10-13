<template>
  <v-app-bar
      outlined
      app
      color = "primary"
   >
    <v-row>
      <v-col cols="3">
        <router-link :to="{name:'RoutineLanding'}"><v-img :src="require('../assets/logo.png')"
                     alt="Vuetify Logo"
                     class="shrink mr-2 col-6"
                     contain
                     transition="scale-transition"
                     width="60">
        </v-img>
        </router-link>
      </v-col>
     <v-col cols="3" >
       <div class="d-inline-flex justify-space-around text-center align-content-center mt-3">
         <v-btn class="white--text  mr-16 ml-16" plain  @click="CreateRoutine" >Creá tu rutina</v-btn>
         <v-btn class="white--text mr-16 ml-16" plain @click="RoutineLanding">Rutinas</v-btn>
         <v-btn class="white--text mr-16 ml-16" plain @click="EjerciciosLanding">Ejercicios</v-btn>
         <v-btn class="white--text mr-16 ml-16" plain @click="MyProfile">Mi perfil</v-btn>
         <v-btn class="white--text ml-16"  @click="confirmSalir" plain>
           Salir
         </v-btn>
       </div>
     </v-col>
    </v-row>

    <v-dialog :value="confirmation" width="500px">
      <v-card>
        <v-card-title class="text-h5 warning lighten-2">
          Advertencia
        </v-card-title>
        <v-card-text>
          ¿Seguro que quiere cerrar sesion?
        </v-card-text>
        <v-icon color="warning" size="60">mdi-help</v-icon>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="Salir"
          >
            Si
          </v-btn>
          <v-btn
              color="primary"
              text
              @click="cancelSalir"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderApp",
  data(){
    return {
      confirmation: false,
    }
  },
  methods:{
    CreateRoutine() {
      this.$router.push({name:"RoutineCreadorInfo"});
    },
    RoutineLanding(){
      this.$router.push({name:"RoutineLanding"});
    },
    MyProfile(){
      this.$router.push({name:"My Profile"});
    },
    confirmSalir(){
      this.confirmation=true
    },
    cancelSalir(){
      this.confirmation=false
    },
    async Salir(){
      await this.$store.dispatch("security/logout");
      this.$router.push({name:"Home"})
    },
    EjerciciosLanding(){
      this.$router.push({name:"EjerciciosLanding"});
    }
  }
}
</script>
