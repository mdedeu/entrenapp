<template>
  <PantallaDividida :slug="this.slug"></PantallaDividida>
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
  }
}
</script>

<style scoped>

</style>