<template>
  <v-container v-if="!error" fluid class="primary fill-height">
    <v-row>
      <v-col>
        <p class="text-h2 red--text"> Error</p>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else>
    <Loading v-if="loading"></Loading>
  </v-container>

</template>

<script>
import Loading from "../components/Loading";
export default {
  name: "Verification",
  components: {Loading},
  data(){
    return{
      error:true,
      loading : false
    }
  },
  async created(){
    this.loading = true
    try{
      await this.$store.dispatch("security/verify",{email:this.$route.query.email.replace('%40','@'),code:this.$route.query.code})
      this.$router.push({name:"Login"})
    }catch (e){
      this.loading = false
      this.error=false
    }

  }
}
</script>

