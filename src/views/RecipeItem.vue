<template>
  <div class="fullsize-recipe-container">
    <div class="fullsize-recipe-container-img">
      <img :src="recipe.url" :alt="recipe.title" />
    </div>
    <div class="fullsize-recipe-container-details">
      <a href="#">
        <i class="fas fa-times"></i>
      </a>
      <div class="recipe-container-title">{{ recipe.title }}</div>
      <div class="link-raw">
        <button type="button">Sourse</button>
        <button type="button">Edit</button>
        <Button @click.native="onDeleteClick">Delete</Button>
      </div>
      <div class="ingredients-full">
        <h2>Ingredients</h2>
        <ul>
          <li>
            large head cauliflower (about 2 pounds), cut into bite-sized
            florets
          </li>
          <li>extra-virgin olive oil</li>
          <li>teaspoon fine sea salt</li>
          <li>cloves garlic, pressed or minced</li>
          <li>avocado, sliced into thin strips</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../components/Button";
import { recipes } from "../state";

export default {
  data() {
    return {
      recipe: recipes[this.$route.params.index]
    };
  },
  components: {
    Button
  },
  methods: {
    onDeleteClick() {
      if (!confirm("Are you sure?")) {
        return;
      }
      recipes.splice(this.$route.params.index, 1);
      this.$router.push({ name: "Home" });
    }
  },
  beforeRouteEnter(to, from, next) {
    if (!(to.params.index in recipes)) {
      return next({ name: "404" });
    }
    next();
  },
  beforeRouteUpdate(to, from, next) {
    if (!(to.params.index in recipes)) {
      return next({ name: "404" });
    }
    next();
  }
};
</script>
<style scoped>
.fullsize-recipe-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  padding: 10px;
}
.fullsize-recipe-container-img {
  height: 100%;
  padding-top: 50px;
}
.fullsize-recipe-container-img img {
  width: 100%;
}
.fullsize-recipe-container-details a {
  color: #ff80aa;
  font-size: 30px;
  position: absolute;
  right: 15px;
  top: 5px;
}
.recipe-container-title {
  color: black;
  font-family: "Acme", sans-serif;
  font-size: 25px;
  text-align: center;
  margin-top: 30px;
}
.ingredients-full {
  background-color: #ffe6f2;
  padding: 30px;
  margin-top: 30px;
}
.ingredients-full h2 {
  color: black;
  font-family: "Acme", sans-serif;
  font-size: 25px;
}
.ingredients-full li {
  color: black;
  font-size: 20px;
  font-family: "Nanum Myeongjo", serif;
}
.link-raw {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
}
.link-raw button {
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  border: 5px solid #ffe6f2;
  border-radius: 10px;
  padding: 15px;
  font-size: 15px;
  font-family: "Acme", sans-serif;
  cursor: pointer;
}
@media (min-width: 490px) {
  .link-raw {
    justify-content: center;
  }
  .link-raw button {
    margin: 15px;
  }
}
@media (min-width: 880px) {
  .fullsize-recipe-container {
    flex-wrap: nowrap;
  }
  .fullsize-recipe-container-img {
    padding-top: 0;
    padding-right: 20px;
  }
  .fullsize-recipe-container-img img {
    width: 100%;
  }
  .link-raw {
    justify-content: flex-start;
  }
  .recipe-container-title {
    text-align: inherit;
  }
}
@media (min-width: 500px) {
  .fullsize-recipe-container-img {
    width: 50%;
    height: auto;
  }
  .fullsize-recipe-container-img img {
    width: 100%;
  }
}
@media (min-width: 1200px) {
  .fullsize-recipe-container-img {
    width: 35%;
  }
  .fullsize-recipe-container-details a {
    right: 80px;
    top: 17px;
  }
}
</style>