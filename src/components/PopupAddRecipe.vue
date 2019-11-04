<template>
  <div class="popup">
    <div class="popup-content">
      <form class="new-recipe-form">
        <p>Add new recipe</p>
        <a href="#">
          <i class="fas fa-times"></i>
        </a>
        <input type="text" name="recipe title" placeholder="recipe title" required />
        <input type="text" name="recipe source" placeholder="recipe source" required />
        <input type="text" name="recipe picture" placeholder="recipe picture" required />
        <button type="button">Add</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>