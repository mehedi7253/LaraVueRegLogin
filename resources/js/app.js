import './bootstrap';
import { createApp } from 'vue';
import AppComponent from './App.vue'
import router from './router'
import User from './Helpers/User';
window.User = User;

const app = createApp({
    components: {
        AppComponent,
    }
});

app.use(router)
app.mount('#app');
