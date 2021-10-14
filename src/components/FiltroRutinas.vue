<template>
  <v-container>
    <Loading v-if="loading"></Loading>

    <v-container v-else fluid>
      <v-row class="accent--text" justify="space-around" >
        <v-col cols="6" >
          <v-row justify="center">
            <h2 class="font-weight-medium">Filtra por nivel de dificultad, duración y más</h2>
          </v-row>
          <v-row justify="space-around">Nivel de dificultad:</v-row>
          <v-row class="pt-6" justify="space-around" v-for="difficult in difficulty" :key="difficult.level">
            <template>
              <v-btn
                  rounded
                  width="60%"
                  class="primary--text"
                  :id="difficult.level"
                  @click="addColorDifficulty(difficult.level)"
              >{{ difficult.level }}
              </v-btn>
            </template>
          </v-row>

          <v-row class=" pt-6" justify="space-around">Duración:</v-row>
          <v-row class="pt-6" justify="space-around" v-for="durationE in duration" :key="durationE.range">
            <template>
              <v-btn
                  rounded
                  width="60%"
                  class="primary--text"
                  :id="durationE.range"
                  @click="addColorDuration(durationE.range,durationE)"
              >{{ durationE.range }}
              </v-btn>
            </template>
          </v-row>
          <v-row justify="space-around" class="mt-6 mb-n5">
            ¿Vas a necesitar alguna máquina o equipación extra?
          </v-row>
          <v-row justify="space-around" class="pt-6">
            <v-checkbox
                label="Equipación extra"
                color="accent"
                hide-details
                dark
                v-model="equipacion"
            ></v-checkbox>
          </v-row>

          <v-row justify="space-around" class="pt-6" >
            <v-col cols="4">
              <v-select
                  v-model="selected_sport"
                  :items="sports"
                  label="Deporte Relacionado"
                  solo
                  full-width
              ></v-select>
            </v-col>
          </v-row>
          <v-row justify="space-around">
            <v-btn class="accent text--primary" rounded width="200px" @click="filter"> Filtrar
            </v-btn>
          </v-row>
        </v-col>
        <v-divider
            vertical class="accent"
        ></v-divider>


        <v-col cols="6">
          <v-card-text justify="space-around" class="waiting-api" v-if="!routinesF" > Filtra tus rutinas!</v-card-text>
          <v-row class="pt-6 pl-6" justify="space-around" v-for="routine in routinesF" :key="routine.name">
            <DescriptiveRoutine :routineDes="routine" ></DescriptiveRoutine>
          </v-row>

        </v-col>
      </v-row>
    </v-container>
  </v-container>

</template>


<script>


import DescriptiveRoutine from "./DescriptiveRoutine";
import {mapGetters} from 'vuex'
import Loading from "./Loading";

export default {
  name: 'FiltroRutinas',
  components: {Loading, DescriptiveRoutine},
  props:{
    slug: {
        type: String,
        required: true
    }
  },
  data(){
    return {

      difficulty: [{level:"Principiante"},{level:"Intermedio"},{level:"Avanzado"}],
      duration: [{from:0,to:15,range:"0-15"},{from:15,to:30,range:"15-30"},{from:30,to:45,range:"30-45"},{from:45,to:60,range:"45-60"}],
      loading: false,
      sports: ['Futbol','Hockey','Tenis','Otro'],
      selected_difficulty : null,
      selected_duration : null,
      selected_sport: null,
      routinesF:null,
      equipacion:false
    }
  },
  methods : {
    filter(){
      this.routinesF = this.routines

      if(this.selected_difficulty!=null){
        if(this.selected_difficulty=='Principiante')
          this.routinesF=this.routinesF.filter( (item) => item.difficulty == 'rookie')
        else  if(this.selected_difficulty=='Intermedio')
          this.routinesF=this.routinesF.filter( (item) => item.difficulty == 'intermediate')
        else(this.selected_difficulty=='Avanzado')
          this.routinesF=this.routinesF.filter( (item) => item.difficulty == 'expert')
      }
      if(this.selected_sport!=null)
        this.routinesF=this.routinesF.filter( (item) => item.metadata.sport == this.selected_sport)

      if(this.selected_duration!=null)
        this.routinesF=this.routinesF.filter( (item) => {
          let b1 = (item.metadata.duracion >= this.selected_duration.from)
          let b2 =(item.metadata.duracion < this.selected_duration.to)
          return b1 && b2
        })

      if(this.equipacion)
        this.routinesF = this.routinesF.filter( (item)  => item.metadata.equipacion )

      return this.routinesF

    },

    addColorDifficulty(id){
        let element =document.getElementById(id)

        if(!this.selected_difficulty){
          this.selected_difficulty = id;
          element.classList.add('accent')
        }else{
          if(this.selected_difficulty === id){
            element.classList.remove('accent')
            this.selected_difficulty = null;
          }
          else{
            document.getElementById(this.selected_difficulty).classList.remove('accent')
            this.selected_difficulty = id;
            element.classList.add('accent')
          }
        }
    },
    addColorDuration(id,duration){
      let element =document.getElementById(id)

      if(!this.selected_duration){
        this.selected_duration = duration;
        element.classList.add('accent')
      }else{
        if(this.selected_duration.range === id){
          element.classList.remove('accent')
          this.selected_duration = null;
        }
        else{
          document.getElementById(this.selected_duration.range).classList.remove('accent')
          this.selected_duration = duration;
          element.classList.add('accent')
        }
      }
    }
  },
  computed:{

    ...mapGetters('security',{
      user: 'getUser',
    }),

    ...mapGetters('routine',['getOther']),
    ...mapGetters('favouriteRoutine',['getFavouritesId']),

    routines(){
      if(this.slug==='favoritas'){
        return this.getFavouritesId
      }
      return this.getOther(this.user.username)
    },
  },
  async created() {
    this.loading = true;
    await this.$store.dispatch("security/getCurrentUser")
    if(this.slug != 'favoritas')
      await this.$store.dispatch("routine/getAll")
    else
      await this.$store.dispatch("favouriteRoutine/getAll")
    this.loading = false;
    this.routinesF = this.routines
  }


}

</script>

<style scoped>
.waiting-api{
  font-size: 1.5em;
  margin-top: 25%;
}
.routine{
  max-height: 45em;
  overflow: auto;
}

</style>

