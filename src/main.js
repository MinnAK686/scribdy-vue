import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/************************* Additional CSS & JS **************************/

// CSS
import "./assets/css/global.css";
import "./assets/font/bootstrap-icons.css";

// JS
import "./assets/js/bootstrap.bundle.min";
import "./assets/js/jquery.min";

/************************* End Additional CSS & JS **************************/

createApp(App).use(router).mount("#app");
