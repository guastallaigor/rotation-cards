import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import CardService from "../services/CardService";
import { Pile, Piles, AddPile, NewDeck } from "../interfaces/interfaces";

@Module
export default class Card extends VuexModule {
  private id!: string | number;
  private pile!: Pile;

  @Action({ commit: "setId" })
  async getNewDeck() {
    const response: NewDeck = await CardService.getNewDeck();

    return response.deck_id;
  }

  @Action
  async drawAllCards(id: string | number) {
    await CardService.drawAllCards(id);
  }

  @Action({ commit: "setPile" })
  async addToPile({ cards }: AddPile) {
    const response: Pile | null = await CardService.addToPile(this.id, cards);

    return response;
  }

  @Action({ commit: "setPile" })
  async getCardsPile(id: string | number) {
    const response: Piles = await CardService.getCardsPile(id);

    return response;
  }

  @Mutation
  setId(id: number) {
    this.id = id;
  }

  @Mutation
  setPile(pile: Pile) {
    this.pile = pile;
  }
}
