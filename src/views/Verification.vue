<template>
  <v-container v-if="!error" fluid class="primary fill-height">
    <v-row>
      <v-col>
        <p class="text-h2 red--text"> Error</p>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else>
    <img v-if="loading" :src="require('@/assets/ajax-loader.gif')">
  </v-container>

</template>

<script>
export default {
  name: "Verification",
  data(){
    return{
      error:true
    }
  },
  async created(){

    try{
      await this.$store.dispatch("security/verify",{email:this.$route.query.email.replace('%40','@'),code:this.$route.query.code})
      this.$router.push({name:"Login"})
    }catch (e){
      this.error=false
    }

  }
}
</script>

