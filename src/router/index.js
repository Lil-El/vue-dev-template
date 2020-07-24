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
    hidden: false
  },
  {
    path: "/auth-redirect",
    component: () => import("@/views/login/auth-redirect"),
    hidden: true
  },
  ...homeRouter,
  ...manageRouter,
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401"),
    hidden: true
  }
];

export const asyncRoutes = [
  {
    path: "/uc",
    component: Layout,
    children: [
      // {
      //   path: "dashboard",
      //   component: () => import("@/views/dashboard/index"),
      //   name: "Dashboard",
      //   meta: { title: "Dashboard", icon: "dashboard", affix: true }
      // },
      {
        path: "profile",
        component: () => import("@/views/manage/profile"),
        name: "Profile",
        meta: { title: "个人信息", icon: "el-icon-user", noCache: true }
      },
      {
        path: "swiper",
        name: "Swiper",
        component: () => import("@/views/manage/swiper"),
        meta: {
          title: "轮播图",
          icon: "el-icon-picture-outline",
          roles: ["admin"]
        }
      },
      {
        path: "scheme",
        name: "Scheme",
        component: () => import("@/views/manage/scheme"),
        meta: {
          title: "产品",
          icon: "el-icon-goods",
          roles: ["admin"]
        }
      },
      {
        path: "demo",
        name: "Demo",
        component: () => import("@/views/manage/demo"),
        meta: {
          title: "演示",
          icon: "el-icon-data-analysis",
          roles: ["admin"]
        }
      },
      {
        path: "news",
        name: "News",
        component: () => import("@/views/manage/news"),
        meta: {
          title: "资讯",
          icon: "el-icon-news",
          roles: ["admin"]
        }
      },
      {
        path: "account",
        name: "Account",
        component: () => import("@/views/manage/news"),
        meta: {
          title: "账号管理",
          icon: "el-icon-news",
          roles: ["admin"]
        }
      },
      // {
      //   path: "/error",
      //   redirect: "noRedirect",
      //   name: "ErrorPages",
      //   meta: {
      //     title: "Error Pages",
      //     icon: "404"
      //   },
      //   children: [
      //     {
      //       path: "401",
      //       component: () => import("@/views/error-page/401"),
      //       name: "Page401",
      //       meta: { title: "401", noCache: true }
      //     },
      //     {
      //       path: "404",
      //       component: () => import("@/views/error-page/404"),
      //       name: "Page404",
      //       meta: { title: "404", noCache: true }
      //     }
      //   ]
      // },
      { path: "*", redirect: "/404", hidden: true }
    ]
  }
];

const createRouter = () =>
  new Router({
    mode: "history",
    scrollBehavior: (to, from, savedPosition) => {
      // console.log(arguments);
      return { y: 0 };
    },
    routes: constantRoutes
  });

const router = createRouter();

// 清空路由
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
