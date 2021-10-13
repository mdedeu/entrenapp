<template>
  <PantallaDividida :slug="this.slugData"></PantallaDividida>
</template>

<script>
import PantallaDividida from "../components/PantallaDividida";
export default {
  name: "RutinasFavoritas",
  components: {PantallaDividida},
  props:{
    slug:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      slugData: null
    }
  },
  created() {
    if(!this.slug){
      this.slugData = ((JSON).parse(localStorage.getItem('vuex')))['cache']['propsData']['slug']
    }
    else{
      this.slugData = this.slug
      this.$store.dispatch('cache/setSlug',this.slug)
    }
  }
}
</script>

<style scoped>

</style>