<template>
  <div>
    <Header v-on:addNewRecipe="onClickAddNewPopup" />
    <main>
      <div class="recipe-container">
        <RecipeCover v-for="recipe in recipes" :key="recipe.title" :recipe="recipe" />
      </div>
    </main>
    <PopupAddRecipe v-if="popupAddRecipe" />
  </div>
</template>

<script>
import RecipeCover from "./components/RecipeCover";
import Header from "./components/Header";
import PopupAddRecipe from "./components/PopupAddRecipe";

export default {
  name: "app",
  components: {
    RecipeCover,
    Header,
    PopupAddRecipe
  },
  data() {
    return {
      recipes: [
        {
          url: require("./assets/img/cauliflower-and-farro-salad.jpg"),
          title: "Roasted Cauliflower and Farro Salad with Feta and Avocado"
        },
        {
          url: require("./assets/img/healthy-slaw-salad.jpg"),
          title: "Simple Healthy Slaw"
        },
        {
          url: require("./assets/img/easy-brussels-sprout-salad.jpg"),
          title: "Honey Mustard Brussels Sprout Slaw"
        },
        {
          url: require("./assets/img/strawberry-salad.jpg"),
          title: "Strawberry, Basil and Goat Cheese Salad with Balsamic Drizzle"
        }
      ],
      popupAddRecipe: false
    };
  },
  methods: {
    onClickAddNewPopup() {
      this.popupAddRecipe = true;
    }
  }
};
</script>

<style>
</style>
