import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/views/Home");
const About = () => import("@/views/About");

const routes = [
  {
    path: "/",
    name: "Root",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
