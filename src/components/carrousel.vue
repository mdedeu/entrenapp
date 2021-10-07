<template>
    <v-container fluid class="accent fill-height">
      <v-row justify="center">
        <v-col cols="3">
          <router-link  :to="{name:`${Section.nameComponent}`}" class="text-h4">{{ Section.title }}</router-link>
        </v-col>
        </v-row  >
        <v-row>
          <v-carousel v-model="model" style="height: 30vh">
            <v-carousel-item  >
              <template>
                <v-row>
                  <v-col v-for="routine in routines" :key="routine.id">
                    <v-card
                        className="mx-auto"
                        max-width="344"
                    >
                      <v-card-text>
                        <div>{{routine.name}}</div>
                        <p class="text-h4 text--primary">{{routine.name}}</p>
                        <div class="text--primary">Nivel de dificultad : {{routine.level}}<br></div>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                            text
                            color="teal accent-4"
                        >Leer más
                        </v-btn>
                      </v-card-actions>
                    </v-card>


                  </v-col>
                </v-row>
              </template>
            </v-carousel-item>
          </v-carousel>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: "carrousel",
    data(){
      return {
        routines : [ {id:0,name:"Pecho",level:"1"} , {id:1,name:"Pecho",level:"1"} , {id:2, name:"Pecho",level:"1"}, {id:3, name:"Pecho",level:"1"} ],
      }
  },
    props:{
      Section: {
        type: Object,
        required : true
      }
    }

  }
</script>

