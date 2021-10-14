<template>
  <v-container fluid class="accent fill-height">
    <v-row justify="center" class="mb-5 mt-4">
      <v-col cols="5">
        <router-link  :to="{path:`${Section.path}`}" class="text-h4">{{ Section.title }}</router-link>
      </v-col>
    </v-row>
    <v-row class="mb-5 mt-4" justify="space-around">
      <v-slide-group show-arrows >
        <v-slide-item v-if="this.exercises.length === 0" >
          <v-container class="primary--text" >
            <h4 class="primary--text">Todavía no hay ejercicios</h4>
            <v-icon  size="60" color="primary"> mdi-emoticon-sad-outline</v-icon>
          </v-container>
        </v-slide-item>
        <v-slide-item
            v-for="exercise in exercises"
            :key="exercise.id">
          <DescriptiveExercise :exerciseDes="exercise" ></DescriptiveExercise>
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </v-container>
</template>

<script>
import DescriptiveExercise from './DescriptiveExcercise'
export default {
  name: "ExerciseCarrousel",
  components:{DescriptiveExercise},
  props:{
    Section: {
      type: Object,
      required : true
    },
    exercises:{
      type:[],
      required:true
    }
  },
}
</script>

>