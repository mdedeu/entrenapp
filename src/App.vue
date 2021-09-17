<template>
  <v-app>
    <HeaderApp></HeaderApp>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import HeaderApp from "./components/HeaderApp";

export default {
  name: 'App',

  components: {
    HeaderApp,
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
