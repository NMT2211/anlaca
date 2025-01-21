import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import router
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '@fortawesome/fontawesome-free/css/all.css';

// Tạo ứng dụng Vue và sử dụng router
createApp(App).use(router).mount("#app");
