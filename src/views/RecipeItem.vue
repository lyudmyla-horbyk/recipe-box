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
        <button type="button">Delete</button>
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
import { recipes } from "../state";
export default {
  data() {
    return {
      recipe: recipes[this.$route.params.index]
    };
  },
  mounted() {
    // eslint-disable-next-line
    console.log(this.$route.params.index);
  }
};
</script>
<style>
</style>