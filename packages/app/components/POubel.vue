<script setup lang="ts">
import poubelIMG from "~/assets/poubel.avif";
import poubelFeuIMG from "~/assets/poubel feu.gif";

const isInFire = ref(false);

const isHovered = ref(false);

const emit = defineEmits<{
  (event: "update:rigolo", value: boolean): void;
}>();

watch(isInFire, (value) => {
  emit("update:rigolo", value);
});
</script>
<template>
  <div
    class="fire"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img
      :src="isInFire ? poubelFeuIMG : poubelIMG"
      @click="isInFire = !isInFire"
    />
    <h2 v-if="isHovered">MOde rigolo</h2>
  </div>
</template>

<style lang="scss">
$in-fire: v-bind(isInFire);

.fire {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
  h2 {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
}
</style>
