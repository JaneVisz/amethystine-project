import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import RegisterBar from "./components/RegisterBar.vue";
import LoginBar from "./components/LoginBar.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/register",
    name: "RegisterBar",
    component: RegisterBar,
  },
  {
    path: "/login",
    name: "LoginBar",
    component: LoginBar,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
