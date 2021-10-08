<template>
  <img v-if="loading" :src="require('@/assets/ajax-loader.gif')">

  <v-container v-else fluid class="primary fill-height">
        <v-row>
            <v-col cols = "12"><HeaderApp/></v-col>
        </v-row>
        <v-row class="pt-16">
            <carrousel :Section="{title:'Rutinas recomendadas',nameComponent:'RutinasRecomendadas'}" :routines="other"></carrousel>
        </v-row>

        <v-row class="pt-16" >
            <carrousel :Section="{title:'Tus rutinas',nameComponent:'Tus rutinas'}" :routines="mine"></carrousel>
        </v-row>

        <v-row class="pt-16">
            <carrousel :Section="{title:'Rutinas favoritas',nameComponent:'RutinasFavoritas'}" ></carrousel>
        </v-row>

    </v-container>


</template>

<script>
    import carrousel from '../components/carrousel'
    import HeaderApp from '../components/HeaderApp'
    import {mapGetters} from 'vuex'



    export default {
    name: "RoutineLanding",
    components:{
        carrousel,
        HeaderApp
    },
    data(){
      return{
        loading : false,
      }
    },
    computed:{
      ...mapGetters('routine',{
        Allroutines: 'getOther'
      }),
      ...mapGetters('security',{
        user: 'getUser'
      }),

      mine(){
        return this.Allroutines.filter((item => item.user.username===(this.user.username)))
      },
      other(){
        return this.Allroutines.filter((item => item.user.username != (this.user.username)))
      }

    } ,

    async created() {
       this.loading = true;
       await this.$store.dispatch("routine/getAll")
       await this.$store.dispatch("security/getCurrentUser")
       this.loading = false;
    }



}
</script>
