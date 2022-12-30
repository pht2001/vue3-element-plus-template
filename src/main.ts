import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installIcons from '@/icons'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import style
import '@/styles/index.scss'
import 'element-plus/dist/index.css'

const app = createApp(App)
installIcons(app)

// 注册element组件库 图标组件
for(let [key, value] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, value)
}

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
