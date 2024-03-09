import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/home/index.vue";
import baseFun from "../views/test/base.vue";
import callback from "../views/test/callback.vue";
import comVal from "../views/test/component-val.vue";
import comGlobal from "../views/test/component-global.vue";
import comIs from "../views/test/component-is.vue";
import slot from "../views/test/slot.vue";
import computed from "../views/test/computed.vue";
import watch from "../views/test/watch.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/baseFun",
    name: "baseFun",
    component: baseFun,
  },
  {
    path: "/comGlobal",
    name: "comGlobal",
    component: comGlobal,
  },
  {
    path: "/comVal",
    name: "comVal",
    component: comVal,
  },
  {
    path: "/comIs",
    name: "comIs",
    component: comIs,
  },
  {
    path: "/slot",
    name: "slot",
    component: slot,
  },
  {
    path: "/computed",
    name: "computed",
    component: computed,
  },
  {
    path: "/watch",
    name: "watch",
    component: watch,
  },
  {
    path: "/callback",
    name: "callback",
    component: callback,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
