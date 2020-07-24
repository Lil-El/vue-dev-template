import Layout from "@/layout/manage";

export default [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index")
      }
    ]
  }
  // {
  //   path: "/uc",
  //   component: Layout,
  //   children: [
  //     // {
  //     //   path: "dashboard",
  //     //   component: () => import("@/views/dashboard/index"),
  //     //   name: "Dashboard",
  //     //   meta: { title: "Dashboard", icon: "dashboard", affix: true }
  //     // },
  //     {
  //       path: "profile",
  //       component: () => import("@/views/profile/index"),
  //       name: "Profile",
  //       meta: { title: "Profile", icon: "user", noCache: true }
  //     }
  //   ]
  // }
];
