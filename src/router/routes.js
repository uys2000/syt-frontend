export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/layouts/HomeLayout.vue"),
    children: [
      {
        path: "/",
        name: "input",
        component: () => import("@/views/HomeView.vue"),
      },
      {
        path: "/video/",
        name: "video",
        component: () => import("@/views/VideoView.vue"),
      },
      {
        path: "/video/:id",
        name: "video",
        component: () => import("@/views/VideoView.vue"),
      },
      {
        path: "/list/",
        name: "list",
        component: () => import("@/views/ListView.vue"),
      },
      {
        path: "/list/:id",
        name: "list",
        component: () => import("@/views/ListView.vue"),
      },
    ],
  },
];
