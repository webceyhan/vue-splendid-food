import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap
import "bootstrap";
import "./assets/styles/main.scss";

createApp(App).use(router).use(store).mount("#app");
