<template>
  <v-container>

  <v-row justify="space-between">

    <Back></Back>


    <v-col class="col-3" offset="6" >
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

              >
                <v-icon left>
                  mdi-bookmark-outline
                </v-icon>
                <slot></slot>

              </v-btn>
            </template>

            <v-card >
              <v-card-title class="text-h5 green lighten-2">
               Éxito
              </v-card-title>

              <v-card-text>
                Rutina agregada a favoritos!
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
export default {
  name: 'BackAndButton',
  components:{
    Back
  },
  data(){
    return {
      dialog:false
    }
  }
}

</script>