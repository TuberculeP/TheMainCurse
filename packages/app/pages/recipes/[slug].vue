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
    <div class="image">
      <NuxtImg :src="recipe?.data.image.url" />
    </div>
    <div class="columns">
      <div>
        <div class="title">
          <h1 class="bouuuh">{{ recipe?.data.Title }}</h1>
        </div>
        <q>{{ recipe?.data.Description }}</q>
        <h4>Découvrez plus par catégorie :</h4>
        <div class="tags" v-if="recipe?.data.tags?.length">
          <NuxtLink
            :to="`/tags/${tag.name}`"
            v-for="tag in recipe?.data.tags"
            :key="tag.id"
          >
            <span>{{ tag.name }}</span>
          </NuxtLink>
        </div>
        <p v-else>ah ben nn ducoup</p>
      </div>
      <div>
        <div
          class="steps"
          v-if="recipe?.data.Steps"
          v-html="$md.render(recipe?.data.Steps)"
        ></div>
      </div>
    </div>
  </div>
  <Loading v-else />
</template>

<style scoped lang="scss">
.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
  gap: 30px;
}
q {
  display: block;
  padding-bottom: 20px;
}
.recipe {
  padding: 20px;
  text-align: center;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .image {
    background: url("~/assets/bats.gif");
    display: flex;
    justify-content: center;
    img {
      width: 250px;
      display: block;
      width: fit-content;
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
