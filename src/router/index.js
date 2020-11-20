import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "@/layout/manage";

import manageRouter from "./modules/manage";
import homeRouter from "./modules/home";

export const constantRoutes = [
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: false,
  },
  {
    path: "/auth-redirect",
    component: () => import("@/views/login/auth-redirect"),
    hidden: true,
  },
  ...homeRouter,
  ...manageRouter,
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401"),
    hidden: true,
  },
  { path: "*", redirect: "/404" },
];

export const asyncRoutes = [
  {
    path: "/uc",
    component: Layout,
    children: [
      {
        path: "profile",
        component: () => import("@/views/manage/profile"),
        name: "Profile",
        meta: { title: "个人信息", icon: "el-icon-user", noCache: true },
      },
      { path: "*", redirect: "/404", hidden: true },
    ],
  },
];

const createRouter = () =>
  new Router({
    mode: "history",
    scrollBehavior: (to, from, savedPosition) => {
      // console.log(arguments);
      return { y: 0 };
    },
    routes: constantRoutes,
  });

const router = createRouter();

// 清空路由
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
