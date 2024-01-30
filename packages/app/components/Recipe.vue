<script setup lang="ts">
const { recipe } = defineProps<{ recipe: any }>();
</script>

<template>
  <div class="card">
    <NuxtLink :to="`/recipes/${recipe.slug}`">
      <NuxtImg :src="recipe.image.url" />
      <h3>{{ recipe.Title }}</h3>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.card {
  text-align: center;
  border: 10px double red;
  a {
    img {
      width: 100%;
    }
    text-decoration: none;
    appearance: none;
    color: inherit;
  }
}
</style>
