<template>
<!--  <v-container>-->
<!--    <div class="text-center">-->
<!--      <v-dialog-->
<!--          v-model="dialog"-->
<!--          width="500"-->
<!--      >-->
<!--        <template v-slot:activator="{ on, attrs }">-->
<!--          <v-btn-->
<!--              color=""-->
<!--              dark-->
<!--              v-bind="attrs"-->
<!--              v-on="on"-->
<!--          >-->
<!--            Click Me-->
<!--          </v-btn>-->
<!--        </template>-->

<!--        <v-card>-->
<!--          <v-card-title class="text-h5 grey lighten-2">-->
<!--            Privacy Policy-->
<!--          </v-card-title>-->

<!--          <v-card-text>-->
<!--            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
<!--          </v-card-text>-->

<!--          <v-divider></v-divider>-->

<!--          <v-card-actions>-->
<!--            <v-spacer></v-spacer>-->
<!--            <v-btn-->
<!--                color="primary"-->
<!--                text-->
<!--                @click="dialog = false"-->
<!--            >-->
<!--              I accept-->
<!--            </v-btn>-->
<!--          </v-card-actions>-->
<!--        </v-card>-->
<!--      </v-dialog>-->
<!--    </div>-->
<!--  </v-container>-->
<v-container>
  <v-dialog
      width="500"
      :value="popup"
  >

    <template v-slot:activator="{ on, attrs }" >
      <v-btn
          width="100%"
          rounded
          color="white"
          class="primary--text justify-center text-h5 mt-n10"
          height="100%"
          v-bind="attrs"
          v-on="on"
          @click="popup=true"
      >
        <v-icon
            x-large
            color="primary"
            class="pl-10 pr-5"
        >
          mdi-plus-box-outline
        </v-icon>
      </v-btn>
    </template>
    <v-card class="primary"
    rounded>
      <SeleccCateg v-on:close-popup="popup=false"></SeleccCateg>
    </v-card>

  </v-dialog>


</v-container>
</template>

    <script>
    import SeleccCateg from "./SeleccCateg";
    export default {
      name: "AgregarEjercicio",
      components: {SeleccCateg},
      data(){
        return {
          popup: false
        }
      }
    }
    </script>

    <style scoped>

    </style>