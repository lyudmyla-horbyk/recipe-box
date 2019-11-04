<template>
  <div class="recipe">
    <img :src="recipe.url" :alt="recipe.title" />
    <p>{{ recipe.title }}</p>
  </div>
</template>
<script>
export default {
  props: {
    recipe: Object
  }
};
</script>