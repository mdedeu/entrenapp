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
              <v-col v-for="exercise in exercises" :key="exercise.id">
                <v-card
                    className="mx-auto"
                    max-width="344"
                    @click="EjercicioDescripcion"
                >
                  <v-card-text>
                    <div>{{exercise.name}}</div>
                    <p class="text-h4 text--primary">{{exercise.name}}</p>
                  </v-card-text>
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
  name: "CarrouselParaEjercicios",
  data(){
    return {
      exercises : [ {id:0,name:"Salto con soga"} , {id:1,name:"Salto con soga"} , {id:2,name:"Salto con soga"}, {id:3,name:"Salto con soga"} ],
    }
  },
  props:{
    Section: {
      type: Object,
      required : true
    }
  },
  methods:{
    EjercicioDescripcion(){
      this.$router.push({name:"EjercicioDescripcion"})
    }
  }

}
</script>

