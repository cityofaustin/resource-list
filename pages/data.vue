<template>
  <v-layout>
    <v-flex class="text-center">
      {{ data }}
    </v-flex>
  </v-layout>
</template>
<script>


export default {
// let data = (await $axios.get('https://data.austintexas.gov/resource/k4db-swbf.json`')).data
async asyncData({ $axios }) {
  const data = await $axios.$get('https://data.austintexas.gov/resource/k4db-swbf.json')
  return { data }
}
}
</script>
