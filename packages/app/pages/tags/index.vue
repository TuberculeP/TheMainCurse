<script setup lang="ts">
const { find } = useStrapi();
const route = useRoute();
const { data: tags } = useAsyncData("allTags", () => find("tags"));
</script>
<template>
  <div class="tags">
    <div class="tags-list">
      <NuxtLink
        v-for="tag in tags?.data"
        :key="tag.id"
        :to="`/tags/${tag.name}`"
      >
        <span>{{ tag.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
