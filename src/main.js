import { createApp } from "vue";
import "@tabler/core/dist/css/tabler.min.css";
import "@tabler/core/dist/js/tabler.js";
import App from "./App.vue";
import router from "./router";
import "vue-toast-notification/dist/theme-sugar.css";
import { createPinia } from "pinia";
import axios from "axios";

const app = createApp(App);
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
app.use(createPinia());
app.use(router);

app.mount("#app");
