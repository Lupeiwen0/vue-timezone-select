import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { ElSelect, ElOption } from "element-plus";

const app = createApp(App);

app.component(ElSelect.name, ElSelect);
app.component(ElOption.name, ElOption);

import "element-plus/es/components/select/style/index";

app.mount("#app");
