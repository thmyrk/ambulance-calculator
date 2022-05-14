<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Calculator from "@/components/Calculator.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Calculator />
    </div>
  </header>
</template>

<style>
@import "@/assets/base.css";

body {
  background-image: url("./assets/background.jpg");
  background-size: cover;
}

#app {
  margin: auto;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: flex;
    place-items: center;
  }

  header {
    display: flex;
    place-items: center;
  }

  .wrapper {
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
