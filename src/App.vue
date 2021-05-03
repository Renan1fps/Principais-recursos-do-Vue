<template>
  <ButtonEvent text="Botão" @meuEvento="action($event)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  components: {
    
  },
  methods: {
    action(event: string) {
      alert(event)
    }
  }
})
</script>


