<template>
        <v-container fluid class="primary fill-height">
            <v-row>
                <v-col align="center">
                    <p class="text-center accent--text">Seleccionar la categoria</p>
                </v-col>
            </v-row>
            <v-row v-for="category in categories" :key="category.cat">
              <v-dialog
              width="70%"
              :value="category.cat === category_active">
                <template v-slot:activator="{ on, attrs }" >
                <v-col cols="12" align="center">
                    <v-btn
                        rounded
                        v-on="on"
                        v-bind="attrs"
                        @click="openDialog(category)"
                    >
                      {{ category.cat }}
                    </v-btn>
                </v-col>
                </template>
                <PopupDescanso v-if="category.cat==='Descanso'"  v-on:close-popup="updateShowing()"></PopupDescanso>
                <PopupSeleccionarEjercicio v-else v-on:close-popup="updateShowing()"></PopupSeleccionarEjercicio>
              </v-dialog>


            </v-row>
        </v-container>
</template>

<script>
    import PopupSeleccionarEjercicio from "./PopupSeleccionarEjercicio";
    import PopupDescanso from "./PopupDescanso";
    export default {
    name: "SeleccCateg",
      components: {PopupDescanso, PopupSeleccionarEjercicio},
      data(){
        return {
          categories:[{cat:"Ejercicios recomendados",showing:false},{cat:"Tus ejercicios",showing:false},{cat:"Ejercicios favoritos",showing:false},{cat: 'Descanso',showing:false}],
          category_active: false
        }
      },
      methods : {
        updateShowing(){
            this.category_active= false
        },
        openDialog(category){
          this.category_active = category.cat
        }
      }
}
</script>
