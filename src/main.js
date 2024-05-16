import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap and BootstrapVue CSS files (order is important)

const app = createApp(App);

app.use(router);

app.mount('#app');
