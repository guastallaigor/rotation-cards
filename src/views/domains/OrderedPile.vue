<template>
  <section class="ordered-pile">
    <div class="layout wrap-row justify-center align-center">
      <div v-for="(card, index) in getPiles" :key="index">
        <img v-if="card.value.match(/[^\d]/g)" :src="card.image" />
        <card v-else :card="card" />
      </div>
    </div>
    <p class="font-bold">High Card: {{ getHighCard }}</p>
    <p class="font-bold">Full House Combo: None</p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { Cards, Pile } from "../../interfaces/interfaces";
import Card from "../../components/Card.vue";

@Component({
  components: {
    Card
  }
})
export default class OrderedPile extends Vue {
  private id!: string | (string | null)[];
  @State(state => state.card.pile) private pile!: Pile;
  @Action("getCardsPile") private getCardsPile!: (id: string | number) => void;

  get getPiles(): Cards | [] {
    return this.pile.piles.rotation.cards || [];
  }

  get getHighCard(): string {
    const { cards }: any = this.pile.piles.rotation;

    return cards && cards.length ? cards[cards.length - 1].code : "";
  }

  created() {
    this.init();
  }

  private async init() {
    this.id = this.$route?.params?.id;
    await this.getCardsPile(String(this.id));
  }
}
</script>

<style lang="scss" scoped>
.ordered-pile {
  margin: 1em 10em;

  > div {
    background-color: $light-grey-3;
    border: 1px solid $dark-grey;

    img {
      margin: 2em;
    }
  }

  p {
    font-size: 2em;
    margin-left: 5em;
  }
}
</style>
