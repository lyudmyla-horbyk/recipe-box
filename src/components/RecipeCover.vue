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
<style>
.recipe-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}
.recipe-container .recipe {
  height: auto;
  width: 19em;
  border: 1px solid #d5d5d5;
  margin: 20px;
}

.recipe-container .recipe img {
  width: 100%;
}
.recipe-container .recipe p {
  color: black;
  font-family: "Acme", sans-serif;
  font-size: 25px;
  text-align: center;
}
</style>