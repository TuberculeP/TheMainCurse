<script setup lang="ts"></script>
<template>
  <header>
    <NuxtLink to="/">
      <img src="~/assets/logoent.png" alt="" />
      <h1>The Main Curse</h1>
    </NuxtLink>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<style lang="scss">
@font-face {
  font-family: "Koumaty";
  font-style: normal;
  font-weight: 400;
  src: local(""),
    url("https://fonts.cdnfonts.com/s/107124/Koumaty-d9Dqg.woff") format("woff");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font-family: "Koumaty";
  font-size: 3rem;
  text-align: center;
  margin: 2rem 0;
  color: white;
}

header {
  position: relative;
  background-color: rgb(235, 15, 15);
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
    appearance: none;
    text-decoration: none;
    color: inherit;
    img {
      width: 100px;
      height: 100px;
      margin: 0 1rem;
    }
  }
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100px;
    background: url("~/assets/sangue.png");
    background-size: 50% 105%;
    background-position-y: -5px;
    background-color: white;
  }
}
</style>
