import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import com_global from './components/com-global.vue'

// createApp(App).mount('#app')
let app=createApp(App);
app.component('component_global',com_global);
app.mount('#app');
