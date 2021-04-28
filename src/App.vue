<template>
<div>
  <ButtonStyled text='cadastrar' />
  <ButtonStyled text='login' />
</div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from './components/ButtonStyled.vue'

export default defineComponent({
  components: {
    ButtonStyled
  }
})
</script>


