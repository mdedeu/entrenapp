<template>


  <v-sheet
      color="blue"
      elevation="1"
      height="50%"
      width="100%"
  >
  <v-container>

    <v-col class="col-2">
      <template>
        <div class="text-center">
          <v-btn
              rounded
              color="transparent"
              width="100%"
              class="white--text"
          >
            <v-icon
                large
                color="white"
            >
              mdi-arrow-left
            </v-icon>
            Atrás
          </v-btn>
        </div>
      </template>
    </v-col>
    <v-row>

      <v-col class="yellow--text text-h3">
          Información de la rutina
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-text-field
            label="Nombre"
            solo
            background-color="white"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
          <v-col col="6" class="yellow--text text-h3">
            Nivel de dificultad:
          </v-col>
          <v-col col="2">
            <v-btn
                rounded
                color="white"
                width="100%"
                class="black--text"
            >Principiante
            </v-btn>
          </v-col>
      <v-col col="2">
        <v-btn
            rounded
            color="white"
            width="100%"
            class="black--text"
        >Intermedio
        </v-btn>
      </v-col>
      <v-col col="2">
        <v-btn
            rounded
            color="white"
            width="100%"
            class="black--text"
        >Avanzado
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-text-field
            label="Deportes relacionados"
            solo
            background-color="white"
        ></v-text-field>
      </v-col>
    </v-row>



  </v-container>
  </v-sheet>
</template>

<script>

export default {
  name: 'RutinasCreador',
}

</script>