import { createApp } from 'vue'
import './output.css';
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaEllipsisH, FaChevronDown, HiRefresh, FaChevronUp } from "oh-vue-icons/icons";

addIcons(FaEllipsisH, FaChevronDown, HiRefresh, FaChevronUp);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.mount('#app');
