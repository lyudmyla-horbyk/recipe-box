<template>
  <main>
    <div class="recipe-container">
      <router-link
        v-for="(recipe, $index) in recipes"
        :key="recipe.title"
        :to="{name: 'RecipePage', params: { index: $index }}"
      >
        <RecipeCover :recipe="recipe" />
      </router-link>
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
