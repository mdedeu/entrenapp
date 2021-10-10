<template>
  <img v-if="loading" :src="require('@/assets/ajax-loader.gif')">

  <v-container v-else>

    <v-row justify="space-between">

      <Back></Back>


      <v-col v-if="favourite" class="col-3" offset="6" >
        <template>
          <div class="text-center">
            <v-dialog
                v-model="dialog"
                width="500"
                transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="lighten-2"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="removeFromFavourite"
                    :loading="loadingButton"
                    :disabled="loadingButton"

                >
                  <v-icon left>
                    mdi-bookmark-outline
                  </v-icon>
                  Eliminar de favoritas

                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 green lighten-2">
                  Éxito
                </v-card-title>

                <v-card-text>
                  Ejercicio agregado a tus favoritos
                </v-card-text>
                <v-icon color="green" size="60">mdi-check</v-icon>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="primary"
                      text
                      @click="dialog = false"
                      :loading="loadingButton"
                      :disabled="loadingButton"
                  >
                    OK
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>
      </v-col>


      <v-col v-else class="col-3" offset="6" >
        <template>
          <div class="text-center">
            <v-dialog
                v-model="dialog"
                width="500"
                transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="lighten-2"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="addTofavourite"

                >
                  <v-icon left>
                    mdi-bookmark-outline
                  </v-icon>
                  Agregar a favoritos

                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 green lighten-2">
                  Éxito
                </v-card-title>

                <v-card-text>
                  ¡Ejercicio eliminado de favoritos!
                </v-card-text>
                <v-icon color="green" size="60">mdi-check</v-icon>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="primary"
                      text
                      @click="dialog = false"
                  >
                    OK
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>



        </template>
      </v-col>


    </v-row>
  </v-container>
</template>

<script>
import Back from './Back'
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'ExerciseBackAndButton',
  components:{
    Back
  },
  data(){
    return {
      dialog:false,
      loading : true,
      loadingButton:false
    }
  },
  methods:{
    async addTofavourite(){
      this.loadingButton=true
      await this.create(this.exerciseId)
      await this.$store.dispatch("favouriteExercise/getAll")
      this.loadingButton=false
    },
    ...mapActions( 'favouriteExercise',['create'] ),
    ...mapActions( 'favouriteExercise',['delete'] ),


    async removeFromFavourite(){
      this.loadingButton=true
      await this.delete(this.exerciseId)
      await this.$store.dispatch("favouriteExercise/getAll")
      this.loadingButton=false
    }

  },
  props:{
    exerciseId:{
      type:Number,
      required:true
    }
  },

  computed:{
    ...mapGetters('security',{
      user:'getUser'
    }),

    ...mapGetters('favouriteExercise',{
      isFavouriteFunction:'isFavourite'
    }),

    favourite(){
      return  this.isFavouriteFunction.includes(this.exerciseId)
    }

  },
  async created() {
    this.loading = true;
    await this.$store.dispatch("security/getCurrentUser")
    await this.$store.dispatch("favouriteExercise/getAll")
    this.loading = false;
  }

}

</script>