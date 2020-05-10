<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap");

body,
html {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #dff4f7;
}

#app {
  height: inherit;
  width: inherit;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  font-weight: normal;
}
</style>
