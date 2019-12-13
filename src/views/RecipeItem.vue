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
        <Button @click.native="openPopup">Edit</Button>
        <Button @click.native="onDeleteClick">Delete</Button>
      </div>
      <div class="ingredients-full">
        <h2>Ingredients</h2>
        <ul>
          <li>
            large head cauliflower (about 2 pounds), cut into bite-sized florets
          </li>
          <li>extra-virgin olive oil</li>
          <li>teaspoon fine sea salt</li>
          <li>cloves garlic, pressed or minced</li>
          <li>avocado, sliced into thin strips</li>
        </ul>
      </div>
    </div>
    <PopupEditRecipe
      :recipe="recipe"
      v-on:close="closePopup"
      v-on:edit="editRecipe"
      v-if="popupEditRecipe"
    />
  </div>
</template>
<script>
import Button from "../components/Button";
import { recipes } from "../state";
import PopupEditRecipe from "../components/PopupEditRecipe";

export default {
  data() {
    return {
      recipe: recipes[this.$route.params.index],
      popupEditRecipe: false
    };
  },
  components: {
    Button,
    PopupEditRecipe
  },
  methods: {
    onDeleteClick() {
      if (!confirm("Are you sure?")) {
        return;
      }
      recipes.splice(this.$route.params.index, 1);
      this.$router.push({ name: "Home" });
    },
    openPopup() {
      this.popupEditRecipe = true;
    },
    closePopup() {
      this.popupEditRecipe = false;
    },
    editRecipe(editedRecipe) {
      recipes.splice(this.$route.params.index, 1, editedRecipe);
      this.recipe = recipes[this.$route.params.index];
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
<style scoped lang="scss">
.fullsize-recipe-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  padding: 10px;
  @media (min-width: 880px) {
    flex-wrap: nowrap;
  }
  .fullsize-recipe-container-img {
    height: 100%;
    padding-top: 50px;
    @media (min-width: 880px) {
      padding-top: 0;
      padding-right: 20px;
    }
    @media (min-width: 500px) {
      width: 50%;
      height: auto;
    }
    @media (min-width: 1200px) {
      width: 35%;
    }
    img {
      width: 100%;
      @media (min-width: 500px) {
        width: 100%;
      }
    }
  }
  .fullsize-recipe-container-details {
    a {
      color: #ff80aa;
      font-size: 30px;
      position: absolute;
      right: 15px;
      top: 5px;
      @media (min-width: 1200px) {
        right: 80px;
        top: 17px;
      }
    }
  }
  .recipe-container-title {
    color: black;
    font-family: "Acme", sans-serif;
    font-size: 25px;
    text-align: center;
    margin-top: 30px;
    @media (min-width: 880px) {
      text-align: inherit;
    }
  }
  .ingredients-full {
    background-color: #ffe6f2;
    padding: 30px;
    margin-top: 30px;
  }
  h2 {
    color: black;
    font-family: "Acme", sans-serif;
    font-size: 25px;
  }
  li {
    color: black;
    font-size: 20px;
    font-family: "Nanum Myeongjo", serif;
  }
  .link-raw {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    @media (min-width: 880px) {
      justify-content: flex-start;
    }
    @media (min-width: 490px) {
      justify-content: center;
    }
    button {
      color: black;
      text-transform: uppercase;
      text-decoration: none;
      border: 5px solid #ffe6f2;
      border-radius: 10px;
      padding: 15px;
      font-size: 15px;
      font-family: "Acme", sans-serif;
      cursor: pointer;
      @media (min-width: 490px) {
        margin: 15px;
      }
    }
  }
}
</style>
