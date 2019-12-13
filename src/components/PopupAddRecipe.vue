<template>
  <div class="popup-wrapper">
    <div class="backdrop"></div>
    <div class="popup">
      <div class="popup-content">
        <form class="new-recipe-form">
          <p>Add new recipe</p>
          <a href="#">
            <i v-on:click="closePopup" class="fas fa-times"></i>
          </a>
          <input
            v-model="title"
            type="text"
            name="recipe title"
            placeholder="recipe title"
            required
          />
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
<style scoped lang="scss">
.popup-wrapper {
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 1;
  }
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    .new-recipe-form {
      height: 100%;
      background-color: white;
      border-radius: 5px;
      padding: 30px;
      box-sizing: border-box;
      border: 1px solid #d5d5d5;
      position: relative;
    }
    p {
      color: black;
      font-size: 30px;
      font-family: "Acme", sans-serif;
      text-align: center;
    }
    input {
      width: 100%;
      box-sizing: border-box;
      margin-top: 15px;
      padding: 10px;
      font-family: "Nanum Myeongjo", serif;
      font-size: 18px;
      border: 1px solid #d5d5d5;
    }
    .new-recipe-form {
      a {
        color: #ff80aa;
        font-size: 30px;
        position: absolute;
        right: 20px;
        top: 20px;
      }
      button {
        color: black;
        border: 5px solid #ffe6f2;
        border-radius: 10px;
        padding: 15px;
        font-size: 15px;
        font-family: "Acme", sans-serif;
        cursor: pointer;
        text-transform: uppercase;
        margin-top: 15px;
      }
    }
  }
  .popup-content {
    padding: 20px;
    min-width: 320px;
    max-width: 100vw;
    width: 600px;
    box-sizing: border-box;
  }
}
</style>
