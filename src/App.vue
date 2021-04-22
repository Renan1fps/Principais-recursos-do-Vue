<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello cataline'
    }
  },
  beforeMount() {
    console.log(this.$el)
  },
  mounted() {
    this.$el.style.background = 'red'
  }
})
</script>
