<template>
  <ButtonSlot text="Facebook">
    <i class="fab fa-facebook-f"></i>
  </ButtonSlot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonSlot from './components/ButtonSlot.vue'

export default defineComponent({
  components: {
    ButtonSlot
  }
})
</script>


