<script setup lang="ts">
const splitSpan = (text: string) => {
  return text
    .split("")
    .map((word, i) => `<span class="idx-${i}">${word}</span>`)
    .join("");
};
const modeRigolo = ref(false);
</script>
<template>
  <header>
    <div class="content">
      <div class="title">
        <NuxtLink to="/">
          <img src="~/assets/logoent.png" alt="" />
          <h1 v-html="splitSpan('The Main Curse')" />
        </NuxtLink>
      </div>
      <nav>
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/tags">Catégories</NuxtLink>
      </nav>
    </div>
  </header>
  <main :class="{ modeRigolo }">
    <slot></slot>
  </main>
  <POubel @update:rigolo="(v) => (modeRigolo = v)" />
</template>

<style lang="scss">
main.modeRigolo * {
  transform: rotate(10deg);
  filter: invert(1);
  &:hover {
    transform: rotate(-15deg);
    filter: invert(0);
  }
}

@font-face {
  font-family: "Koumaty";
  font-style: normal;
  font-weight: 400;
  src: local(""),
    url("https://fonts.cdnfonts.com/s/107124/Koumaty-d9Dqg.woff") format("woff");
}

@font-face {
  font-family: "Xiphos Horror";
  font-style: normal;
  font-weight: 400;
  src: local("Xiphos Horror"),
    url("https://fonts.cdnfonts.com/s/8347/xiphosh.woff") format("woff");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@keyframes letter-move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

header {
  position: relative;
  background: linear-gradient(to bottom, #000000 0%, #ff0000 75%);
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-family: "Koumaty";
    font-size: 3rem;
    text-align: center;
    margin: 2rem 0;
    color: white;
    span {
      @for $i from 1 through 20 {
        &.idx-#{$i} {
          animation-delay: #{$i * 100}ms;
        }
      }
      animation: letter-move 2s infinite ease-in-out;
      display: inline-block;
    }
  }
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

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
    gap: 20px;
    a {
      color: white;
      font-family: "Xiphos Horror";
      text-decoration: none;
      appearance: none;
      user-select: none;
      &:hover {
        color: #ccc;
      }
    }
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 50px;
    background: url("~/assets/sangue.png");
    background-size: auto 105%;
    background-position-x: center;
    background-position-y: -2px;
    background-color: white;
  }
}

h1.bouuuh {
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: flickering;
  animation-timing-function: step-start;
  color: #912914;
  font-family: "UnifrakturCook", cursive;
  font-size: 96px;
}

@keyframes flickering {
  0% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  5% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  10% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(-15deg);
  }
  15% {
    color: #ccc;
    text-shadow: none;
    transform: skewX(-15deg);
  }
  20% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  25% {
    color: #ccc;
    text-shadow: 2px 2px #912914;
    transform: skewX(0);
  }
  30% {
    color: #ccc;
    text-shadow: 2px 2px #912914;
    transform: skewX(0);
  }
  35% {
    color: #ccc;
    text-shadow: 2px 2px #912914;
    transform: skewX(0);
  }
  37% {
    color: #ccc;
    text-shadow: 1px 1px #eee;
    transform: skewX(0);
  }
  40% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(0);
  }
  45% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(0);
  }
  50% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  55% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  60% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  65% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  68% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(0);
  }
  70% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(0);
  }
  75% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(10deg);
  }
  80% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(10deg);
  }
  85% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(10deg);
  }
  90% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  95% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(0);
  }
  100% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
}
</style>
