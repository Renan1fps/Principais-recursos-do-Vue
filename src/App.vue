<template>
  <div>
    <h1 v-highlight="'red'"></h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  directives: {
    highlight: {
      beforeMount(el: HTMLElement, biding){
        console.log(el)
      }
    }
  }
})
</script>

<style scoped>
</style>