<template>
  <h1>{{ count }}</h1>
  <button @click="count++">Incrementar</button>
  <button @click="destroyComponent">Desmontar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 0
    }
  },
  beforeUnmount() {
    console.log('Salvando a contagem no db')
  },
  unmounted() {
    alert('Obrigado por utilizar o contador')
  },
  methods: {
    destroyComponent() {
      this.$.appContext.app.unmount(this.$el)
    }
  }
})
</script>
