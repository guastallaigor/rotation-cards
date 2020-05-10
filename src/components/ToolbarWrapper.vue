<template>
  <header class="layout wrap-column is-header">
    <h1>{{ $route.meta.title || "Rotations Cards" }}</h1>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ToolbarWrapper extends Vue {}
</script>

<style lang="scss" scoped>
.is-header {
  background-color: $dark-green;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  > h1 {
    color: $yellow;
    font-weight: bold;
  }
}
</style>
