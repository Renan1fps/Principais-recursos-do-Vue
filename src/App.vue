<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello cataline',
      posts: []
    }
  },
  beforeCreate() {
    console.log('Antes de ser criado')
  },
  created() {
    console.log('criado')
  }
})
</script>
