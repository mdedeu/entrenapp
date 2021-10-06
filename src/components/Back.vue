<template>
  <v-col class="col-2" offset="0">


    <template>
      <div class="text-center">
        <v-btn
            rounded
            color="transparent"
            width="100%"
            class="white--text"
            @click="goBack"
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
</template>

<script>

export default {
  name : 'Back',
  methods:{
    goBack(){
      return this.$router.go(-1);
    }
  }
};

</script>