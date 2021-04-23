<template>
  <a v-bind:href="product.url" v-bind:class="changesBackgroundColor">{{
    product.name
  }}</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      product: {
        name: 'Sabonete',
        url: 'http://google.com',
        stock: false
      }
    }
  },
  computed: {
    changesBackgroundColor():string {
      if (this.product.stock) {
        return 'verde'
      } else {
        return 'vermelho'
      }
    }
  }
})
</script>

<style scoped>
.vermelho {
  color: red;
}
.verde {
  color: green;
}
</style>
