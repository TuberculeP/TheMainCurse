<script lang="ts" setup>
console.log("oeigzeogibze");
const { search, results, pending } = storeToRefs(useRecipeStore());
console.log(search, results);
</script>

<template>
  <div class="container" v-if="!pending">
    <div class="flex flex-col items-center gap-y-4">
      <h1 class="bouuuh">Recettes</h1>
      <input type="text" placeholder="rechercher" v-model="search" />
      <div class="recipe-container">
        <Recipe v-for="recipe in results" :key="recipe.id" :recipe="recipe" />
      </div>
    </div>
  </div>
  <Loading v-else />
</template>

<style scoped lang="scss">
.recipe-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  align-items: flex-end;
  justify-content: center;
  gap: 20px;
}

input {
  padding: 10px;
  border: 1px solid red;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.2rem;
  text-align: center;
  font-family: cursive;
  color: darkred;
  transform: scaleY(-1);
}
</style>
