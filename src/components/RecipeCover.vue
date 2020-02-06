<template>
  <div class="recipe">
    <div class="wrapper-img">
    <img :src="recipe.url" :alt="recipe.title" />
    </div>
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
<style lang="scss">
.recipe-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  .recipe {
    height: auto;
    width: 19em;
    border: 1px solid #d5d5d5;
    margin: 20px;
    img {
      width: 100%;
      height: auto
    }
    p {
      color: black;
      font-family: "Acme", sans-serif;
      font-size: 25px;
      text-align: center;
      height: 100px;
    }
    .wrapper-img{
      height: 100%;
      width: 100%;
      display: block;
    }
  }
}
</style>
