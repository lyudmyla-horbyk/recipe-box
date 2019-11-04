<template>
  <div>
    <header>
      <div class="title">
        <a href="index.html">Recipe Box</a>
        <i class="fas fa-utensils"></i>
      </div>
    </header>
    <main>
      <div class="recipe-container">
        <div class="recipe" v-for="recipe in recipes" :key="recipe.title">
          <img :src="recipe.url" alt="Cauliflower and farro salad" />
          <p>{{ recipe.title }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      recipes: [
        {
          url: require("./assets/img/cauliflower-and-farro-salad.jpg"),
          title: "Roasted Cauliflower and Farro Salad with Feta and Avocado"
        },
        {
          url: require("./assets/img/healthy-slaw-salad.jpg"),
          title: "Simple Healthy Slaw"
        },
        {
          url: require("./assets/img/easy-brussels-sprout-salad.jpg"),
          title: "Honey Mustard Brussels Sprout Slaw"
        },
        {
          url: require("./assets/img/strawberry-salad.jpg"),
          title: "Strawberry, Basil and Goat Cheese Salad with Balsamic Drizzle"
        }
      ]
    };
  }
};
</script>

<style>
</style>
