<template>
    <v-container fluid class="accent fill-height">
      <v-row justify="center" class="mb-5 mt-4">
        <v-col cols="5">
          <router-link  :to="{path:`${SectionData.path}`}" class="text-h4">{{ SectionData.title }}</router-link>
        </v-col>
        </v-row  >
        <v-row class="mb-5 mt-4" justify="space-around">
          <v-slide-group show-arrows >
            <v-slide-item
                v-for="routine in routinesData"
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
    data(){
      return {
        routinesData: null,
        SectionData: null
      }
    },
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
    created() {
      if(!this.routines){
        this.routinesData = ((JSON).parse(localStorage.getItem('vuex')))['propsData']['routines']
      }
      else{
        this.routinesData = this.routines
        this.$store.dispatch('cache/setRoutines',this.routines)
      }

      if(!this.Section){
        this.SectionData = ((JSON).parse(localStorage.getItem('vuex')))['propsData']['Section']
      }
      else{
        this.SectionData = this.Section
        this.$store.dispatch('cache/setSection',this.Section)
      }
    }


  }
</script>

