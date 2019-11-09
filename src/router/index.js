import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import RecipeItem from "../views/RecipeItem";

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
  }
];

const router = new VueRouter({
  routes
});

export default router;
