<template>
    <v-container fluid class="accent fill-height">
      <v-row justify="center" class="mb-5 mt-4">
        <v-col cols="5">
          <router-link  :to="{name:`${Section.nameComponent}`}" class="text-h4">{{ Section.title }}</router-link>
        </v-col>
        </v-row  >
        <v-row class="mb-5 mt-4">
          <v-slide-group show-arrows >
            <v-slide-item
                v-for="routine in routines"
                :key="routine.id"
            >
              <v-card
                  width="50vh"
                  class="mx-12"
                  @click="RoutineDescription"
              >
                <v-card-text>
                  <div>{{routine.name}}</div>
                  <p class="text-h4 text--primary">{{routine.name}}</p>
                  <div class="text--primary">Nivel de dificultad : {{routine.level}}<br></div>
                </v-card-text>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: "carrousel",
    data(){
      return {
        routines : [ {id:0,name:"Pecho",level:"1"} , {id:1,name:"Pecho",level:"1"} , {id:2, name:"Pecho",level:"1"}, {id:3, name:"Pecho",level:"1"}, {id:3, name:"Pecho",level:"1"}, {id:3, name:"Pecho",level:"1"}, {id:3, name:"Pecho",level:"1"}, {id:3, name:"Pecho",level:"1"}, {id:3, name:"Pecho",level:"1"}, {id:3, name:"Pecho",level:"1"} ],
      }
  },
    props:{
      Section: {
        type: Object,
        required : true
      }
    },
    methods:{
      RoutineDescription(){
        this.$router.push({name:"RoutineDescription"})
      }
    }

  }
</script>

