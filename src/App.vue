<template>
 <ul>
   <li @click="currentView='Home'">Home</li>
   <li @click="currentView='Sobre'">Sobre</li>
   <li @click="currentView='Contato'">Contato</li>
 </ul>
 <component :is="currentView"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './pages/Home.vue'
import Sobre from './pages/Sobre.vue'
import Contato from './pages/Contato.vue'


export default defineComponent({
  components: {
    Sobre,
    Home,
    Contato 
  },
  data(){
    return{
      currentView:'Home'
    }
  }
  
})
</script>


