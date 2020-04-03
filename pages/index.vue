<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <love-chicken />
        <city-seal />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Resource List
        </v-card-title>
        <v-card-text>
          <p>
            This is a project of the Service Design Lab, part of the Office of Design & Delivery at CTM
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/data"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import LoveChicken from '~/components/LoveChicken.vue'
import CitySeal from '~/components/CitySeal.vue'

export default {
  components: {
    LoveChicken,
    CitySeal
  }
}
</script>
