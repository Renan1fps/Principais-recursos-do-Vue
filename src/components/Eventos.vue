<template>
  <button class="button-event" @click="$emit('meuEvento','Dados')">{{ text }}</button>
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
.button-event {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  background-color: #2d6cea;
}
</style>