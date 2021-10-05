<template>
  <v-container>

  <v-row justify="space-between">

    <Back></Back>


    <v-col class="col-3" offset="6" >
      <template>
        <v-btn
            rounded
            color="white"
            width="100%"
        >
          <v-icon
              large
          >
            mdi-bookmark-outline
          </v-icon>
          <slot></slot>
        </v-btn>

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
  }
}

</script>