<template>
  <img v-if="loading" :src="require('@/assets/ajax-loader.gif')">

  <v-container style="height: 90vh" v-else>
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
                    v-model="name"
                ></v-text-field>

            </v-col>
        </v-row>
      <v-container class="routines">
        <v-row v-for="routine in routines" :key="routine.id">
          <v-col cols="12" align="center">
            <DescriptiveRoutine :routineDes="routine"></DescriptiveRoutine>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
</template>

<script>
    import Back from './Back'
    import DescriptiveRoutine from "./DescriptiveRoutine";
    import {mapGetters} from 'vuex'
    export default {
      name: "BuscadorRutinas",
      components: {DescriptiveRoutine,Back},
      data(){
        return {
          loading : false,
          name:null
        }
      },
      computed: {
        ...mapGetters('security',{
          user: 'getUser',
        }),
        ...mapGetters('routine',['getMine']),

        allMine(){
          return this.getMine(this.user.id)
        },

        routines(){
          if(!this.name){
            return this.allMine
          }
          return this.allMine.filter( (item) => item.name===this.name)
        }
      },
      async created() {
        this.loading = true;
        await this.$store.dispatch("routine/getAll")
        await this.$store.dispatch("security/getCurrentUser")
        this.loading = false;
      }
    }

</script>

<style scoped>
.routines{
  max-height: 600px;
  overflow: auto;
}
</style>
