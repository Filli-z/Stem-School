import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/css/ionicons.min.css"
import "./components/js/swiper-bundle.min"
import "./components/css/swiper-bundle.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')