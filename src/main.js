import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import router from "./router";
import './index.css';
import 'aos/dist/aos.css'



const app = createApp(App);
app.use(router);

app.mount("#app");
AOS.init({
     duration:800,
     delay:500
})
