<template>
  <main>
    <div class="recipe-container">
      <RecipeCover v-for="recipe in recipes" :key="recipe.title" :recipe="recipe" />
    </div>
  </main>
</template>
<script>
import RecipeCover from "../components/RecipeCover";
import { recipes } from "../state";

export default {
  data() {
    return {
      recipes
    };
  },
  components: {
    RecipeCover
  }
};
</script>
