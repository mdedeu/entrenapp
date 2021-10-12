<template>
  <v-container fluid class="primary fill-height">
    <HeaderApp></HeaderApp>
    <v-row justify="center">
        <ProfileCard></ProfileCard>
    </v-row>
  </v-container>
</template>

<script>
import HeaderApp from "../components/HeaderApp";
import ProfileCard from "../components/ProfileCard";


export default {
  name: "MyProfile.vue",
  components: {
   HeaderApp,
   ProfileCard
  }
}
</script>

<style scoped>

</style>