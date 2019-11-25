import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import RecipeItem from "../views/RecipeItem";
import PageNotFound from "../views/PageNotFound";

Vue.use(VueRouter);

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "RecipePage",
    path: "/recipe-item/:index",
    component: RecipeItem
  },
  {
    name: "404",
    path: "*",
    component: PageNotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
