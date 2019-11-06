<template>
  <div class="popup">
    <div class="popup-content">
      <form class="new-recipe-form">
        <p>Add new recipe</p>
        <a href="#">
          <i v-on:click="closePopup" class="fas fa-times"></i>
        </a>
        <input v-model="title" type="text" name="recipe title" placeholder="recipe title" required />
        <input
          v-model="url"
          type="text"
          name="recipe picture"
          placeholder="recipe picture"
          required
        />
        <input
          v-model="ingredients"
          type="text"
          name="recipe ingredients"
          placeholder="recipe ingredients"
          required
        />
        <button v-on:click="addRecipe" type="button">Add</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      url: "",
      ingredients: ""
    };
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
    addRecipe() {
      this.$emit("add", {
        url: this.url,
        title: this.title
      }),
        this.$emit("close");
    }
  }
};
</script>
<style>
</style>