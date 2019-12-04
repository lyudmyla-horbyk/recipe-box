<template>
  <header>
    <div class="title">
      <router-link :to="{name: 'Home'}">Recipe Box</router-link>
      <i class="fas fa-utensils"></i>
    </div>

    <Button class="header-button" v-on:click.native="onButtonClick">Add Recipe</Button>
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
<style scoped>
header {
  display: flex;
  align-items: center;
  background-color: #ff80aa;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
}
header .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header .title a {
  color: white;
  font-family: "Acme", sans-serif;
  font-size: 35px;
  margin: 0 25px 0 25px;
  text-decoration: none;
}
header .title .fas {
  color: white;
  font-size: 30px;
}
header .header-button {
  margin-right: 25px;
}
@media (max-width: 405px) {
  header {
    justify-content: center;
    flex-direction: column;
  }
}
</style>