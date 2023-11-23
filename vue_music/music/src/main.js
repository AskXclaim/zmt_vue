import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/base.css'
import './assets/main.css'
import veeValidationPlugin from "@/plugins/veeValidationPlugin";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(veeValidationPlugin);

app.mount('#app');
