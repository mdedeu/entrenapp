<template>
  <img v-if="loading" :src="require('@/assets/ajax-loader.gif')">

  <v-container v-else fluid class="primary fill-height">
        <v-row>
            <v-col cols = "12"><HeaderApp/></v-col>
        </v-row>
        <v-row class="pt-16">
            <carrousel :Section="{title:'Rutinas recomendadas',path:'/Rutinas/recomendadas'}" :routines="other"></carrousel>
        </v-row>

        <v-row class="pt-16" >
            <carrousel :Section="{title:'Tus rutinas',path:'/TusRutinas'}" :routines="mine"></carrousel>
        </v-row>

        <v-row class="pt-16">
            <carrousel :Section="{title:'Rutinas favoritas',path:'/Rutinas/favoritas'}" :routines="favourites"></carrousel>
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

      ...mapGetters('security',{
        user: 'getUser',
      }),
      ...mapGetters('routine',['getMine']),
      ...mapGetters('routine',['getOther']),
      ...mapGetters('favouriteRoutine',['getFavouritesId']),

      mine(){
        return this.getMine(this.user.username)
      },
      other(){
        return this.getOther(this.user.username)
      },
      favourites(){
        return this.getFavouritesId
      }

    } ,

    async created() {
       this.loading = true;
       await this.$store.dispatch("routine/getAll")
       await this.$store.dispatch("security/getCurrentUser")
       await this.$store.dispatch("favouriteRoutine/getAll")
      this.loading = false;
    }



}
</script>
