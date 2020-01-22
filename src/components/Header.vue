<template>
  <header>
    <div class="title">
      <router-link :to="{ name: 'Home' }">Recipe Box</router-link>
      <i class="fas fa-utensils"></i>
    </div>
    <Button class="header-button" v-on:click.prevent="onButtonClick"
      >Add Recipe</Button
    >
  </header>
</template>
<script>
import Button from "./Button";
export default {
  components: {
    Button
  },
  methods: {
    onButtonClick(event) {
      this.$emit("addNewRecipe", event);
    }
  }
};
</script>
<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  background-color: #ff80aa;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 405px) {
    justify-content: center;
    flex-direction: column;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: white;
      font-family: "Acme", sans-serif;
      font-size: 35px;
      margin: 0 25px 0 25px;
      text-decoration: none;
    }
    .fas {
      color: white;
      font-size: 30px;
    }
  }
  .header-button {
    margin-right: 25px;
  }
}
</style>
