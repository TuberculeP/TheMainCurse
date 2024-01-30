<template>
  <h1>Chargement...</h1>
</template>

<style scoped>
@keyframes woohooo {
  0% {
    transform: translate(-50%, -50%) rotateY(0deg) scale(1);
    color: red;
    border-color: red;
  }
  50% {
    transform: translate(-50%, -50%) rotateY(180deg) scale(1.5);
    color: blue;
    border-color: blue;
  }
  100% {
    transform: translate(-50%, -50%) rotateY(360deg) scale(1);
    color: green;
    border-color: green;
  }
}
h1 {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: woohooo 1s infinite linear;
  text-align: center;
  background-color: white;
  width: fit-content;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 100%;
  border-width: 3px;
  border-style: solid;
}
</style>
