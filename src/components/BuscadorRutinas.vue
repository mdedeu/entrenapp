<template>
  <v-container style="height: 90vh">
    <Loading v-if="loading"></Loading>
    <v-container  v-else>
      <v-row>
        <v-col>
          <Back/>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <p class="text-h3 accent--text">Tus rutinas</p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="4" >
          <v-text-field
              label="Nombre"
              filled
              dense
              rounded
              background-color="white"
              width="50%"
              append-icon="mdi-magnify"
              @click:append-icon="filter"
              @keyup="filter"
              v-model="name"
          ></v-text-field>

        </v-col>
      </v-row>

      <v-container>
        <v-row class="primary ">
          <v-col>
            <v-alert v-if="NoResults"
                     color="red"
                     type="error"
                     transition="scale-transition"
                     dismissible
                     outlined
                     @click="NoResults=false"
                     id="error"
            >No se encontraron resultados</v-alert>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="routines">
        <v-row v-for="routine in routineF" :key="routine.id">
          <v-col cols="12" align="center">
            <DescriptiveRoutine :routineDes="routine"></DescriptiveRoutine>
          </v-col>
        </v-row>
      </v-container>


    </v-container>
  </v-container>

</template>

<script>
    import Back from './Back'
    import DescriptiveRoutine from "./DescriptiveRoutine";
    import {mapGetters} from 'vuex'
    import Loading from "./Loading";
    export default {
      name: "BuscadorRutinas",
      components: {Loading, DescriptiveRoutine,Back},
      data(){
        return {
          loading : false,
          name:null,
          routineF:null,
          NoResults : false
        }
      },
      computed: {
        ...mapGetters('security',{
          user: 'getUser',
        }),
        ...mapGetters('routine',['getMine']),

        mine(){
          return this.getMine(this.user.id)
        }

      },
      methods:{
        filter(){
          if(!this.name){
            this.routineF = this.mine
          }
          let aux= this.mine.filter( (item) => item.name.toUpperCase().startsWith(this.name.toUpperCase()) )
          if(aux.length == 0){
            this.routineF = this.mine
            this.NoResults = true
          }else{
            this.routineF = aux
            this.NoResults = false
          }
        }
      },
      async created() {
        this.loading = true;
        await this.$store.dispatch("routine/getAll")
        await this.$store.dispatch("security/getCurrentUser")
        this.loading = false;
        this.routineF = this.mine
      }
    }

</script>

<style scoped>
.routines{
  max-height: 600px;
  overflow: auto;
}
</style>
