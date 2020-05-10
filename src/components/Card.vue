<template>
  <div class="card relative" v-if="!isNaN(symbol)">
    <div class="first layout nowrap-column">
      <span :style="{ color: getSymbolColor }">{{ symbol }}</span>
      <img :src="getFirst" width="20px" />
    </div>
    <div class="middle layout wrap-row space-around">
      <div class="is-img" v-for="i in Number(symbol) || 0" :key="i">
        <img :src="getCard(i)" />
      </div>
    </div>
    <div class="last layout nowrap-column">
      <img :src="getFirst" />
      <span :style="{ color: getSymbolColor }">{{ symbol }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Cards } from "../interfaces/interfaces";

@Component
export default class Card extends Vue {
  @Prop({ type: Object, required: true })
  private card!: Cards;

  private type!: string;
  private symbol!: string;

  private getCard(index: number) {
    const symbol = Number(this.symbol);

    if (this.type !== "D") {
      if ((index > symbol - 2 && symbol >= 4) || (symbol < 4 && index > 2) || (symbol === 2 && index === 2)) {
        return require(`../assets/img/cards/${this.type.toLowerCase()}4.png`);
      }
    }

    return this.getSecond;
  }

  get getSymbolColor(): string {
    return this.type === "H" || this.type === "D" ? "#d40a00" : "#030303";
  }

  get getFirst(): string {
    return require(`../assets/img/cards/${this.type.toLowerCase()}.png`);
  }

  get getSecond(): string {
    return require(`../assets/img/cards/${this.type.toLowerCase()}2.png`);
  }

  created() {
    this.type = this.card.code.substring(1, 2);
    this.symbol = this.card.code.substring(0, 1);
  }
}
</script>

<style lang="scss" scoped>
@mixin symbol-position($mtSpan: 0.1em, $wImg: 18px, $rotate: 0) {
  span {
    transform: rotate($rotate);
  }

  img {
    width: $wImg;
  }
}

.card {
  margin: 2em;
  border: 1px solid $dark-grey;
  border-radius: 10px;
  height: 314px;
  width: 226px;
  background: $white;
  box-sizing: border-box;

  span {
    font-size: 2.8em;
  }

  .middle {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-left: 1.5em;
    padding-top: 1.2em;

    .is-img {
      width: 68px;
    }

    img {
      width: 45px;
      height: 55px;
    }
  }

  .first {
    position: absolute;
    top: 0;
    left: 5px;
    @include symbol-position();
  }

  .last {
    position: absolute;
    bottom: 0;
    right: 5px;
    @include symbol-position(0.2em, 18px, 180deg);
  }
}
</style>
