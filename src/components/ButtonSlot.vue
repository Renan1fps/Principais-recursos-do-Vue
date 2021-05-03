<template>
  <button class="button-slot">
      <slot/>
      {{text}}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: [String, Number],
      default: 'Empty'
    }
  }
})
</script>

<style scoped>
.button-slot {
  background-color: rgb(66, 66, 192);
  padding: 5px;
  font-size: 20px;

  border-radius: 5px;
  color: aliceblue;
}
</style>