import Vue from "vue";
import VueRouter from "vue-router";
import Playground from "../views/Playground.vue";
import Person from "../views/api/Person.vue";
import Home from "../views/Home.vue";
import Installation from "../views/Installation.vue";
import Company from "../views/api/Company";
import Finance from "../views/api/Finance";
import Dates from "../views/api/Dates";
import Misc from '../views/api/Misc'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/playground",
    name: "Playground",
    component: Playground,
  },
  {
    path: "/person",
    name: "Person",
    component: Person,
  },
  {
    path: "/installation",
    name: "Installation",
    component: Installation,
  },
  {
    path: "/dates",
    name: "Dates",
    component: Dates,
  },
  {
    path: "/company",
    name: "Company",
    component: Company,
  },
  {
    path: "/finance",
    name: "Finance",
    component: Finance,
  },
  {
    path: "/misc",
    name: "Misc",
    component: Misc,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
