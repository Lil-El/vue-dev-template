import Layout from "@/layout/home";

export default [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    // hidden: true, 展示在sidebar中
    meta: { title: "首页", icon: "el-icon-s-home" },
    children: [
      {
        path: "home",
        component: () => import("@/views/home"),
        name: "Home",
        hidden: true,
        meta: { title: "Home", icon: "home", affix: true }
      },
      {
        path: "department",
        component: () => import("@/views/home"),
        name: "Department",
        hidden: true,
        meta: { title: "Department", affix: true }
      },
      {
        path: "scheme",
        component: () => import("@/views/home"),
        name: "Scheme",
        hidden: true,
        meta: { title: "Scheme", affix: true }
      },
      {
        path: "demo",
        component: () => import("@/views/home"),
        name: "Demo",
        hidden: true,
        meta: { title: "Demo", affix: true }
      },
      {
        path: "news",
        component: () => import("@/views/home"),
        name: "News",
        hidden: true,
        meta: { title: "News", affix: true }
      },
      {
        path: "contact",
        component: () => import("@/views/home"),
        name: "Contact",
        hidden: true,
        meta: { title: "Contact", affix: true }
      }
    ]
  }
];
