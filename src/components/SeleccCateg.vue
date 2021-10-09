<template>
        <v-container fluid class="primary fill-height">
            <v-row >
                <v-col align="center">
                    <p class="text-center accent--text">Seleccionar la categoria</p>
                </v-col>
            </v-row>
            <v-row v-for="category in categories" :key="category.cat">
              <v-dialog>
                <template v-slot:activator="{ on, attrs }" >
                <v-col cols="12" align="center">
                    <v-btn
                        rounded
                        v-on="on"
                        v-bind="attrs"
                    >
                      {{ category.cat }}
                    </v-btn>
                </v-col>
                </template>

                <PopupSeleccionarEjercicio></PopupSeleccionarEjercicio>
              </v-dialog>


            </v-row>
        </v-container>
</template>

<script>
    import PopupSeleccionarEjercicio from "./PopupSeleccionarEjercicio";
    export default {
    name: "SeleccCateg",
      components: { PopupSeleccionarEjercicio},
      data(){
        return {
          categories:[{cat:"Ejercicios recomendados"},{cat:"Tus ejercicios"},{cat:"Ejercicios favoritos"}]
        }
      }
}
</script>
