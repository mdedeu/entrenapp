<template>
  <v-container fluid class="primary fill-height">
    <v-row> <HeaderHome></HeaderHome> </v-row>

    <v-row class="ml-10" >
      <v-col class="align-self-center" cols="4">
          <div>
            <h1 class="mb-7 accent--text" >Entrená como nunca antes</h1>
            <p class="white--text"> ¿No sabes con qué rutina ejercitarte?Quédate tranquilo: <b>Entrenapp</b> te recomienda rutinas
              personalizadas con gran variedad de ejericios. ¡Empieza ya!</p>
          </div>
      </v-col>
      <v-col cols="1"> </v-col>
      <v-col cols="6" class="mt-auto">
        <v-img :src="require('../assets/Pilates-amico.svg')"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2 class="mb-10 accent--text ml-10">Creá rutinas , compartilas y ejecutalas</h2>
        <v-carousel class="mb-10 mr-16 " hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item>
            <v-img width="100%"  height="100%" contain src="@/assets/ej2.jpg"></v-img>
          </v-carousel-item>
          <v-carousel-item>
            <v-img  width="100%" height="100%" contain src="@/assets/ej.jpg"></v-img>
          </v-carousel-item>
          <v-carousel-item>
            <v-img width="100%"  height="100%" contain src="@/assets/ej3.jpg"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import HeaderHome from "../components/HeaderHome";

export default {
  name: 'Home',
  components: {
    HeaderHome
  }
}
</script>
