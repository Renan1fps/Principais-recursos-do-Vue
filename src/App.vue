<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <transition
      name="fade"
      enter-active-class="animate__animated animate__slideInLeft"
      leave-active-class="animate__animated animate__hinge"
    >
      <h1 v-if="show">Cataline</h1>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'

export default defineComponent({
  data() {
    return {
      show: false
    }
  }
})
</script>

<style scoped>
</style>


