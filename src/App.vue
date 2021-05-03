<template>
<div>
  <button @click="show= !show">Toggle</button>
  <transition name="fade">
    <h1 v-if="show">Cataline</h1>
  </transition>
  
</div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      show: false
    }
  }
})
</script>

<style scoped>
.fade-enter-from, .v-leave-to{
opacity:0
}
.fade-enter-active, .v-leave-active{
transition: opacity 3s
}
</style>


