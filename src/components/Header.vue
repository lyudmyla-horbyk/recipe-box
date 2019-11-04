<template>
  <header>
    <div class="title">
      <a href="index.html">Recipe Box</a>
      <i class="fas fa-utensils"></i>
      <Button v-on:click.native="onButtonClick">Add Recipe</Button>
    </div>
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
      console.log("Hi I'm here"); // eslint-disable-line
      this.$emit("addNewRecipe", event);
    }
  }
};
</script>