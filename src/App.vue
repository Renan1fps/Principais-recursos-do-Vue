<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.nome }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      products: [
        { id: 1, nome: 'feijão' },
        { id: 2, nome: 'arroz' },
        { id: 3, nome: 'batata' },
        { id: 4, nome: 'carne' }
      ]
    }
  }
})
</script>

