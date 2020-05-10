<template>
  <div>
    <github-corner />
    <toolbar-wrapper />
    <main>
      <transition name="fade-custom" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ToolbarWrapper from "../../components/ToolbarWrapper.vue";
import GithubCorner from "../../components/GithubCorner.vue";

@Component({
  components: {
    ToolbarWrapper,
    GithubCorner
  }
})
export default class Layout extends Vue {}
</script>

<style lang="scss">
.fade-custom-enter-active,
.fade-custom-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-custom-enter,
.fade-custom-leave-to {
  opacity: 0;
}
</style>
