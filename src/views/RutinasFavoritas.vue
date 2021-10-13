<template>
  <PantallaDividida :slug="this.slugData"></PantallaDividida>
</template>

<script>
import PantallaDividida from "../components/PantallaDividida";
import {mapGetters} from 'vuex'


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
  computed:{
    ...mapGetters('cache',['get']),

  },

  created() {
    if(!this.slug){
      this.slugData = this.$store.getters['cache/get']('slug')
    }
    else{
      this.slugData = this.slug
      this.$store.dispatch('cache/set',{key:'slug',value:this.slug})
    }
  }
}
</script>

<style scoped>

</style>