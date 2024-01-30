<template>
  <h1>Chargement...</h1>
</template>

<style scoped>
@keyframes woohooo {
  0% {
    transform: rotate(0deg);
    scale: 1;
    color: red;
  }
  50% {
    scale: 0.6;
    color: blue;
  }
  100% {
    transform: rotate(359deg);
    scale: 1;
    color: green;
  }
}
h1 {
  animation: woohooo 1s infinite linear;
}
</style>
