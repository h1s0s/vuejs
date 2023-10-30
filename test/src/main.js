import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 라우터를 사용하기 위함
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

// BootstrapVue 및 IconsPlugin를 사용하여 등록
app.use(BootstrapVue)
app.use(IconsPlugin)

// Vue Router 등록
app.use(router)

// Vue 인스턴스 생성 및 마운트
app.mount('#app')
