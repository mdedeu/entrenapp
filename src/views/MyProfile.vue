<template>
  <div>
    <HeaderApp></HeaderApp>
    <ProfileCard></ProfileCard>
  </div>
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