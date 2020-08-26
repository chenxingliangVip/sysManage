import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);





export const constantRouterMap = [
  {
    path: '/page403',
    component: () => import("@/views/page403.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
    hidden: true
  },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
export const asyncRouterMap = [
  { path: '*', redirect: '/404', hidden: true }
]

export default router;
