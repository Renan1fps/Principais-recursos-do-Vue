<template>
  <h1>{{ count }}</h1>
  <button @click="incrementar">Incrementar</button>
  <button @click="diminuir">Diminuir</button>
  <button @click="resetar">Resetar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    incrementar() {
      this.count++
    },
    diminuir() {
      this.count--
    },
    resetar() {
      this.count = 0
    }
  }
})
</script>

