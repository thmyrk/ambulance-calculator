<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Calculator from "@/components/Calculator.vue";
</script>

<template>
  <div class="header">
    <h1>Kalkulator karetki</h1>
  </div>

  <div class="wrapper">
    <Calculator />
  </div>
</template>

<style>
@import "@/assets/base.css";

body {
  background-image: url("./assets/background.jpg");
  background-size: cover;
  display: flex;
  color: black;
}

.header {
  display: flex;
  justify-content: center;
  align-content: top;
}

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

#app {
  margin: auto;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
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

body {
  /* display: flex; */
  /* place-items: center; */
}

/* #app {
  display: flex;
  place-items: center;
} */
</style>
