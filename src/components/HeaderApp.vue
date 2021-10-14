<template>
  <Loading v-if="loading"></Loading>
  <v-app-bar v-else
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
     <v-col>
       <div class="d-inline-flex justify-space-around text-center  align-content-center mt-4">
         <router-link :to="{name: 'RoutineCreadorInfo'}" class="white--text mr-16 ml-16">
           <v-btn  class="white--text" plain>
             Creá tu rutina
           </v-btn>

         </router-link>
         <router-link :to="{name: 'RoutineLanding'}" class=" white--text  mr-16 ml-16">
           <v-btn  class="white--text" plain>
             Rutinas
           </v-btn>
         </router-link>
         <router-link :to="{name: 'EjerciciosLanding'}" class=" white--text   mr-16 ml-16">
           <v-btn  class="white--text" plain>
             Ejercicios
           </v-btn>
         </router-link>
         <router-link :to="{name: 'My Profile'}" class=" white--text   mr-16 ml-16">
           <v-btn  class="white--text" plain>
             Mi perfil
           </v-btn>
         </router-link>
         <v-btn class="white--text ml-16 text-decoration-underline"  @click="confirmSalir" plain>
           <u>Salir</u>
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
          ¿Seguro de que quieres cerrar sesión?
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
            Sí
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
      loading : false
    }
  },
  mounted() {

  },
  methods:{
    confirmSalir(){
      this.confirmation=true
    },
    cancelSalir(){
      this.confirmation=false
    },
    async Salir(){
      this.loading = true
      await this.$store.dispatch("security/logout");
      this.$router.push({name:"Home"})
    },
  }
}
</script>
<style scoped >
.router-link-active{
  text-decoration-color: #FFD523;
  text-decoration-style: solid ;
  text-decoration-thickness: 3px;
}
</style>