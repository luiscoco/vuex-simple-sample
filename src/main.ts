import { createApp } from "vue";
import App from "./App.vue";
import store from "../src/store/store";

createApp(App).use(store).mount("#app");
