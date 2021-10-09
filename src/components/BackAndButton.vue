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
                  @click="addTofavourite"
                  :loading="loadingButton"
                  :disabled="loadingButton"

              >
                <v-icon left>
                  mdi-bookmark-outline
                </v-icon>
                Añadir a favoritas

              </v-btn>
            </template>

            <v-card >
              <v-card-title class="text-h5 green lighten-2">
                Éxito
              </v-card-title>

              <v-card-text>
                {{object}}!
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
                      @click="removeFromFavourite"

                  >
                    <v-icon left>
                      mdi-bookmark-outline
                    </v-icon>
                    Eliminar de favoritas

                  </v-btn>
                </template>

                <v-card >
                  <v-card-title class="text-h5 green lighten-2">
                    Éxito
                  </v-card-title>

                  <v-card-text>
                    ¡Rutina eliminada de favoritos!
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
  name: 'BackAndButton',
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
      await this.create(this.routineID)
      await this.$store.dispatch("favouriteRoutine/getAll")
      this.loadingButton=false
    },
    ...mapActions( 'favouriteRoutine',['create'] ),
    ...mapActions( 'favouriteRoutine',['delete'] ),


    async removeFromFavourite(){
      this.loadingButton=true
      await this.delete(this.routineID)
      await this.$store.dispatch("favouriteRoutine/getAll")
      this.loadingButton=false
    }

  },
  props:{
    routineID:{
      type:Number,
      required:true
    }
  },

  computed:{
    ...mapGetters('security',{
      user:'getUser'
    }),

    ...mapGetters('favouriteRoutine',{
      isFavouriteFunction:'isFavourite'
    }),

    favourite(){
      return  !this.isFavouriteFunction.includes(this.routineID)
    }

  },
  async created() {
    this.loading = true;
    await this.$store.dispatch("security/getCurrentUser")
    await this.$store.dispatch("favouriteRoutine/getAll")
    this.loading = false;
  }

}

</script>