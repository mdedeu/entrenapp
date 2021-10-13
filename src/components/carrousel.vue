<template>
    <v-container fluid class="accent fill-height">
      <v-row justify="center" class="mb-5 mt-4">
        <v-col cols="5">
          <router-link  :to="{path:`${Section.path}`}" class="text-h4">{{ Section.title }}</router-link>
        </v-col>
        </v-row  >
        <v-row class="mb-5 mt-4" justify="space-around">
          <v-slide-group show-arrows >
            <v-slide-item
                v-for="routine in routines"
                :key="routine.id">
              <DescriptiveRoutine :routineDes="routine" ></DescriptiveRoutine>
            </v-slide-item>
          </v-slide-group>
        </v-row>
    </v-container>
</template>

<script>
import DescriptiveRoutine from './DescriptiveRoutine'
  export default {
    name: "carrousel",
    components:{DescriptiveRoutine},
    props:{
      Section: {
        type: Object,
        required : true
      },
      routines:{
        type:[],
        required:true
      }
    },
  }
</script>

