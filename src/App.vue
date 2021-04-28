<template>
  <ButtonStyled />
  <!--usa a barra para fechar (paranão usar outra tag de fechamento)-->
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


<style scoped>
/*Essa estilização se aplica somente a esse componente, em resumo eu só estou arrumando ele mais do jeito que quero, para esse componente (caso criei um botão normal ele não será afetado) */
.button-styled {
  position: absolute;
  top: 45%;
}
/*Caso precise estilizar alguma tag dentro ta tag raiz é necessário usar-->   ::v-deep  */
::v-deep.button-styled span{
  color: black;
}
</style>