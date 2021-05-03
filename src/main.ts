import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import ButtonEvent from './components/Eventos.vue'

const app = createApp(App)
app.component('ButtonEvent', ButtonEvent)
app.mount('#app')
