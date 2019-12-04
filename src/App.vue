<template>
  <div>
    <Header v-on:addNewRecipe="onClickAddNewPopup" />
    <PopupAddRecipe v-on:add="addRecipe" v-on:close="closePopup" v-if="popupAddRecipe" />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
import PopupAddRecipe from "./components/PopupAddRecipe";
import { recipes } from "./state";

export default {
  name: "app",
  components: {
    Header,
    PopupAddRecipe
  },
  data() {
    return {
      recipes,
      popupAddRecipe: false
    };
  },
  methods: {
    onClickAddNewPopup() {
      this.popupAddRecipe = true;
    },
    closePopup() {
      this.popupAddRecipe = false;
    },
    addRecipe(newRecipe) {
      this.recipes.push(newRecipe);
    }
  }
};
</script>

<style>
body {
  margin: auto;
}
header,
main,
footer,
h1,
h2,
h3,
h4,
h5,
p,
nav {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
