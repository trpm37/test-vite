import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import com_global from './components/com-global.vue'

// createApp(App).mount('#app')
let app=createApp(App);
app.use(router);
app.use(ElementPlus);
app.component('component_global',com_global);
app.mount('#app');
