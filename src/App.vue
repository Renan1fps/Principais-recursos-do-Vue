<template>
  <button class="success">
    <h5 v-on:click="something">Click aqui para disparar um evento!</h5>
  </button>
  <a v-on:click.prevent="something" href="https://github.com/Renan1fps"
    >Click</a
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  },
  methods: {
    something() {
      alert('Disparou um evento!')
    }
  }
})
</script>
<style scoped>
.success {
  background-color: darkgreen;
}
</style>
