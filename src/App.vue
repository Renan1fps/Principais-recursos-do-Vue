<template>
  <h1 v-if="sexo === 'masculino'">Masculino</h1>
  <h1 v-else>feminino</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      sexo: 'Feminino'
    }
  }
})
</script>

