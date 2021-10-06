<template>
    <v-container fluid class="primary fill-height">
        <v-row style="height: 50px">
            <v-col cols = "12"><HeaderApp/></v-col>
        </v-row>

        <v-row>
            <RoutineDescription>Añadir a favoritas</RoutineDescription>
        </v-row>

        <CarrouselParaCiclos></CarrouselParaCiclos>

    </v-container>
</template>

<script>
    import RoutineDescription from '../components/RoutineDescription'
    import HeaderApp from '../components/HeaderApp'
    import CarrouselParaCiclos from '../components/CarrouselParaCiclos'

    export default {
    name: "RoutineDescriptionPage",
    components:{
        HeaderApp,
        RoutineDescription,
        CarrouselParaCiclos
    }
}
</script>
