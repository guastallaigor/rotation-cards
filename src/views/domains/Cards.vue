<template>
  <section>
    <form @submit.prevent="submit">
      <div class="cards-input layout wrap-row justify-center">
        <div v-for="iterator in 2" :key="iterator" class="layout wrap-row justify-center">
          <c-input
            v-for="inputValue in getInputValues(iterator)"
            :key="inputValue.id"
            :label="'CARD ' + inputValue.id"
            v-model="inputValue.value"
          />
        </div>
      </div>
      <div class="rotation-card layout justify-center align-center">
        <h1 class="font-bold">Rotation Card</h1>
        <c-input v-model="inputRotation.value" max-width="250px" />
      </div>
      <div class="layout justify-center align-center">
        <button type="submit" class="is-submit font-bold pointer">
          Submit
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CInput from "../../components/CInput.vue";
import { Action, State } from "vuex-class";
import { AddPile } from "../../interfaces/interfaces";

interface InputValue {
  id: number;
  value: string;
}

@Component({
  components: {
    CInput
  }
})
export default class Cards extends Vue {
  private inputValues: InputValue[] = [];
  private inputRotation: InputValue = {
    id: 1,
    value: "KD"
  };
  @State(state => state.card.id) private id!: boolean;
  @Action("getNewDeck") private getNewDeck!: () => void;
  @Action("addToPile") private addToPile!: (cards: AddPile) => void;
  @Action("drawAllCards") private drawAllCards!: (id: string | number) => void;

  created() {
    Array(10)
      .fill(0)
      .forEach((it, index) => this.inputValues.push({ id: index + 1, value: "" }));
  }

  private getInputValues(iterator: number): InputValue[] {
    return this.inputValues.filter((inputValue: InputValue) =>
      iterator === 1 ? inputValue.id <= 5 : inputValue.id > 5
    );
  }

  private async submit(): Promise<any> {
    await this.getNewDeck();
    const payload: string[] = this.inputValues.map((inputValue: InputValue) => inputValue.value);
    await this.drawAllCards(String(this.id));
    await this.addToPile({ cards: payload });
    this.$router.push(`/deck/${this.id}`);
  }
}
</script>

<style lang="scss" scoped>
.cards-input {
  margin: 2em;
}

.rotation-card {
  > h1 {
    margin-right: 1em;
    font-size: 2em;
  }
}

.is-submit {
  background-color: $blue;
  color: $yellow;
  padding: 0.3em;
  border-radius: 0.7em;
  min-width: 300px;
  font-size: 3em;
  border: 0;
  margin-top: 7.5em;
}
</style>
