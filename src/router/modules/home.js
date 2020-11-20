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
        meta: { title: "Home", icon: "home", affix: true },
      },
    ],
  },
];
