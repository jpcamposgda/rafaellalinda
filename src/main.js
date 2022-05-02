import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import './assets/tailwind.css'

loadFonts()

createApp(App).use(createPinia())
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
