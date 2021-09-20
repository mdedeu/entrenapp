<template>
  <v-app>
    <HeaderHome></HeaderHome>
    <v-main class="primary">
      <Home></Home>
    </v-main>
  </v-app>
</template>

<script>
import HeaderHome from "./components/HeaderHome";
import Home from "./components/Home";

export default {
  name: 'App',

  components: {
    HeaderHome,
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
