<template >
    <v-container fluid class="primary fill-height">
        <v-row>
            <v-col cols = "12"><HeaderApp/></v-col>
        </v-row>
        <Back/>
        <v-row>
            <v-col align="center">
                <p class="text-h3 yellow--text"><slot>Tus rutinas</slot></p>
            </v-col>
        </v-row>
        <FiltroRutinas/>
    </v-container>
</template>

<script>
    import HeaderApp from '../components/HeaderApp'
    import FiltroRutinas from '../components/FiltroRutinas'
    import Back from '../components/Back'

    export default{
        name: "RoutineSearcher",
        components:{
            HeaderApp,
            FiltroRutinas,
            Back
        }
    }


</script>