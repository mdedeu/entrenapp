<template>
  <v-app>
    <HeaderApp></HeaderApp>
    <v-main>
      <Home></Home>
    </v-main>
  </v-app>
</template>

<script>
import HeaderApp from "./components/HeaderApp";
import Home from "./components/Home";

export default {
  name: 'App',

  components: {
    HeaderApp,
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
