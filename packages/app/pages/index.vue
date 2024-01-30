<script lang="ts" setup>
console.log("oeigzeogibze");
const { search, results, pending } = storeToRefs(useRecipeStore());
console.log(search, results);
</script>

<template>
  <div class="container" v-if="!pending">
    <div class="flex flex-col items-center gap-y-4">
      <h2>Recettes</h2>
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
</style>
