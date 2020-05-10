import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "../views/layout/index.vue";

Vue.use(VueRouter);

const children: Array<RouteConfig> = [
  {
    path: "/deck/new",
    name: "cards",
    component: () => import("../views/domains/Cards.vue"),
    meta: {
      title: "CARDS"
    }
  },
  {
    path: "/deck/:id",
    name: "deck-id",
    component: () => import("../views/domains/OrderedPile.vue"),
    meta: {
      title: "Ordered Pile"
    }
  }
];

const router = new VueRouter({
  routes: [
    {
      path: "/deck/new",
      component: Layout,
      children
    },
    {
      path: "*",
      component: Layout,
      children: [
        {
          path: "*",
          name: "not-found",
          component: () => import("../views/domains/NotFound.vue"),
          meta: {
            title: "Not Found"
          }
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (!to.path.includes("deck")) {
    return next("/deck/new");
  }

  return next();
});

export default router;
