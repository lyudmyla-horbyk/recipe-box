<template>
  <button class="button" type="button" v-on="$listeners">
    <slot />
  </button>
</template>
<style lang="scss">
.button {
  color: black;
  border: 5px solid #ffe6f2;
  border-radius: 10px;
  padding: 15px;
  font-size: 15px;
  font-family: "Acme", sans-serif;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
