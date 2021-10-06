<template>
  <v-container fluid class="primary fill-height">
    <v-row>
      <v-col cols = 12><HeaderApp></HeaderApp></v-col>
    </v-row>

    <v-row>
      <v-col>
        <ProfileCard></ProfileCard>
      </v-col>
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