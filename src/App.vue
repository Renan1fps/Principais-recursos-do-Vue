<template>
  <h1>{{ fullName }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: 'Renan',
      sobrenome: 'Oliveira'
    }
  },
  computed: {
    fullName(): string {
      return `${this.name} ${this.sobrenome}`
    }
  }
})
</script>

