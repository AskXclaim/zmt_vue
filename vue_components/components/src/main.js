import { createApp } from 'vue'
import App from './App.vue'
import Greeting from '@/components/Greeting.vue'

createApp(App).mount('#app')

//For global registration of components see below
// NB global registration isn't recommended:

// const vue = createApp(App)
// vue.component('Greeting', Greeting)
// vue.mount('#app')
