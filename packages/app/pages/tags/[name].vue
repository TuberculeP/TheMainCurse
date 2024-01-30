<script setup lang="ts">
const { findOne } = useStrapi();
const route = useRoute();
const { data: tag } = useAsyncData("oneTag", () =>
  findOne("tags/" + route.params.name, { populate: "*" })
);
console.log(tag, route);
</script>

<template>
  <div class="tag" v-if="tag?.data">
    <h1>Le tag {{ tag.data.name }}</h1>
    <div class="recipes">
      <Recipe
        v-for="recipe in tag.data.recipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>
  </div>
  <Loading v-else />
</template>

<style scoped>
.recipes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
