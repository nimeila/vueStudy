import Vue from "vue";
import VueRouter from "vue-router";
import demo from "../views/demo/index.vue";
import Index from "../views/index.vue";
import interview from "../views/interview/index.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    { path: "/index", component: Index },
    { path: "demo", name: "demo", component: demo },
    { path: "interview", name: "interview", component: interview },
  ],
});

export default router;
