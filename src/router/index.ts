import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import  DashboardLogIn  from '../components/connexion/DashboardLogIn.vue'
import AccueilPage from '../components/dashboard/AccueilPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard-log-in",
    name: "DashboardLogIn",
    component: DashboardLogIn,

  },
  {
    path: "/dashboard",
    name: "AccueilPage",
    component: AccueilPage,
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
