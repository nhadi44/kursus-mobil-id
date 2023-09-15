import Home from "../pages/Home.vue";
import About from "../pages/About.vue";

const routes = [
   {
      path: "/",
      component: Home,
      meta: {
         title: "Kursus Mobil ID",
      },
   },
   {
      path: "/tentang-kami",
      component: About,
      meta: {
         title: "About - Kursus Mobil ID",
      },
   },
   {
      path: "/:catchAll(.*)",
      component: () => import("../pages/error/notFount.vue"),
   },
];

export default routes;
