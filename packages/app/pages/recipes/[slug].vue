<script setup lang="ts">
const { findOne } = useStrapi();
const route = useRoute();
const { data: recipe, pending } = useAsyncData("oneRecipe", () =>
  findOne("recipes/" + route.params.slug, { populate: "*" })
);
console.log(route);
console.log(recipe.value);
</script>

<template>
  <div class="recipe" v-if="!pending">
    <div class="title">
      <NuxtImg :src="recipe?.data.image.url" />
      <h1>{{ recipe?.data.Title }}</h1>
      <NuxtImg :src="recipe?.data.image.url" />
    </div>
    <p>{{ recipe?.data.Description }}</p>
    <div class="tags">
      <span v-for="tag in recipe?.data.tags" :key="tag.id">{{ tag.name }}</span>
    </div>
    <div
      class="steps"
      v-if="recipe?.data.Steps"
      v-html="$md.render(recipe?.data.Steps)"
    ></div>
  </div>
  <Loading v-else />
</template>

<style scoped lang="scss">
@keyframes rotate {
  0% {
    transform: rotate(0deg);
    scale: 1;
  }
  50% {
    scale: 0.6;
  }
  100% {
    transform: rotate(359deg);
    scale: 1;
  }
}

.recipe {
  padding: 20px;
  text-align: center;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    img {
      width: 150px;
      animation: rotate 2s infinite linear;
    }
  }
  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 30px;
    span {
      background-color: rgb(126, 195, 255);
      padding: 5px 10px;
      border-radius: 5px;
    }
  }
  .steps {
    text-align: left;
    background-color: aliceblue;
    padding: 20px;
    :deep(h2) {
      margin: 10px 0;
    }
  }
}
</style>
