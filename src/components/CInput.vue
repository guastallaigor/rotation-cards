<template>
  <div class="layout column c-input" :style="{ maxWidth }">
    <label v-if="label">{{ label }}</label>
    <input type="text" placeholder="Enter card" required v-model="valueComp" v-mask="customTokens" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CInput extends Vue {
  @Prop({ type: String, required: true })
  private value!: string;

  @Prop({ type: String, default: "" })
  private label!: string;

  @Prop({ type: String, default: "" })
  private maxWidth!: string;

  private customTokens = {
    mask: "CM",
    tokens: {
      C: {
        pattern: /[2-9taqjkTAQJK]/,
        transform: (v: string) => v.toLocaleUpperCase()
      },
      M: {
        pattern: /[hdcsHDCS]/,
        transform: (v: string) => v.toLocaleUpperCase()
      }
    }
  };

  get valueComp(): string {
    return this.value;
  }
  set valueComp(val: string) {
    this.$emit("input", val);
  }
}
</script>

<style lang="scss" scoped>
.c-input {
  margin: 0.7em 0.5em 0.7em 0;
}

label {
  color: $grey;
  font-size: 0.7em;
  margin-bottom: 0.3em;
}

$size: 0.85em;

input {
  border: 1px solid $light-grey-2;
  padding: $size - 0.4em;
  font-size: $size;
  padding: $size;
  color: $dark-grey;
  border-radius: 5px;
  text-transform: uppercase;
}

::placeholder {
  color: $light-grey;
  text-transform: none;
}
</style>
