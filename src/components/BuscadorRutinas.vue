<template>
    <v-sheet
        color="blue"
        elevation="1"
        height="50%"
        width="100%"
        class="yellow--text"
    >
    <v-container>
        <Back/>
        <v-row>
            <v-col align="center">
                <p class="text-h3">Tus rutinas</p>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="4" >
                <v-text-field
                    label="Nombre"
                    filled
                    dense
                    rounded
                    background-color="white"
                    width="50%"
                    append-icon="mdi-card-search"
                ></v-text-field>

            </v-col>
        </v-row>



    </v-container>


    </v-sheet>

</template>

<script>
    import Back from './Back'
    export default {
    name: "BuscadorRutinas",
    components:{
        Back
    }
}
</script>

