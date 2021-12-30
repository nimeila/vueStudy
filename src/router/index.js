import Vue from "vue";
import VueRouter from "vue-router";
import demo from "../views/demo/index.vue";
import Index from "../views/index.vue";
import interview from "../views/interview/index.vue";
import videoPlayer from "../views/video/index.vue";
import funcArr from "../views/funcArr/index.vue";
import whatsVue from "../views/whatsVue/index.vue";
import es6 from "../views/es6/index.vue";
import loginHome from "../views/login/Home.vue";
import Bfc from "../views/login/BFC.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    { path: "/whatsVue", name: "whatsVue", component: whatsVue },
    { path: "/index", component: Index },
    { path: "/demo", name: "demo", component: demo },
    { path: "/interview", name: "interview", component: interview },
    { path: "/funcArr", name: "funcArr", component: funcArr },
    { path: "/es6", name: "es6", component: es6 },
    { path: "/videoPlayer", name: "videoPlayer", component: videoPlayer },
    { path: "/loginHome", name: "loginHome", component: loginHome },
    { path: "/Bfc", name: "Bfc", component: Bfc },
  ],
});

export default router;
