<template>
  <h1>{{ name }}</h1>
  <p v-text="name"></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: 'renan'
    }
  }
})
</script>
