<template>
  <v-app-bar
      outlined
      app
      color = "primary"
   >
    <v-row>
      <v-col cols="3">
        <v-img :src="require('../assets/logo.png')"
                     alt="Vuetify Logo"
                     class="shrink mr-2 col-6"
                     contain
                     transition="scale-transition"
                     width="60">
        </v-img>
      </v-col>
     <v-col cols="3" >
       <div class="d-inline-flex justify-space-around text-center align-content-center mt-3">
         <v-btn class="white--text  mr-16 ml-16" plain  @click="CreateRoutine()" >Creá tu rutina</v-btn>
         <v-btn class="white--text mr-16 ml-16" plain @click="RoutineLanding()">Rutinas</v-btn>
         <v-btn class="white--text mr-16 ml-16" plain>Ejercicios</v-btn>
         <v-btn class="white--text mr-16 ml-16" plain @click="MyProfile()">Mi perfil</v-btn>
         <v-btn class="white--text mr-16 ml-16"  @click="Home" plain>
           Salir
           <v-icon color="white">mdi-arrow-right-thin-circle-outline</v-icon>
         </v-btn>
       </div>
     </v-col>
    </v-row>


  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderApp",
  methods:{
    CreateRoutine() {
      this.$router.push({name:"RoutineCreator"});
    },
    RoutineLanding(){
      this.$router.push({name:"RoutineLanding"});
    },
    MyProfile(){
      this.$router.push({name:"My Profile"});
    },
    Home(){
      this.$router.push({name:"Home"})
    }
  }
}
</script>

<style scoped>

</style>