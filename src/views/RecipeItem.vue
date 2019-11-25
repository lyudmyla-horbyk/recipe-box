<template>
  <div class="fullsize-recipe-container">
    <div class="fullsize-recipe-container-img">
      <img :src="recipe.url" :alt="recipe.title" />
    </div>
    <div class="fullsize-recipe-container-details">
      <a href="#">
        <i class="fas fa-times"></i>
      </a>
      <div class="recipe-container-title">{{ recipe.title }}</div>
      <div class="link-raw">
        <button type="button">Sourse</button>
        <button type="button">Edit</button>
        <Button @click.native="onDeleteClick">Delete</Button>
      </div>
      <div class="ingredients-full">
        <h2>Ingredients</h2>
        <ul>
          <li>
            large head cauliflower (about 2 pounds), cut into bite-sized
            florets
          </li>
          <li>extra-virgin olive oil</li>
          <li>teaspoon fine sea salt</li>
          <li>cloves garlic, pressed or minced</li>
          <li>avocado, sliced into thin strips</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../components/Button";
import { recipes } from "../state";

export default {
  data() {
    return {
      recipe: recipes[this.$route.params.index]
    };
  },
  components: {
    Button
  },
  methods: {
    onDeleteClick() {
      if (!confirm("Are you sure?")) {
        return;
      }
      recipes.splice(this.$route.params.index, 1);
      this.$router.push({ name: "Home" });
    }
  },
  beforeRouteEnter(to, from, next) {
    if (!(to.params.index in recipes)) {
      return next({ name: "404" });
    }
    next();
  },
  beforeRouteUpdate(to, from, next) {
    if (!(to.params.index in recipes)) {
      return next({ name: "404" });
    }
    next();
  }
};
</script>
<style>
</style>