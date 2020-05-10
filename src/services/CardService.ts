import axios from "axios";
import { Pile, NewDeck, Piles } from "../interfaces/interfaces";

class CardService {
  private base!: string;

  constructor() {
    this.base = process.env.VUE_APP_BASE_API;
  }

  public async getNewDeck(): Promise<NewDeck> {
    const { data } = await axios.get(`${this.base}/new`);

    return data;
  }

  public async drawAllCards(id: string | number): Promise<any> {
    await axios.get(`${this.base}/${id}/draw?count=52`);
  }

  public async getCardsPile(id: string | number, pileName = "rotation"): Promise<Piles> {
    const { data } = await axios.get(`${this.base}/${id}/pile/${pileName}/list`);

    return data;
  }

  public async addToPile(id: string | number, cards: string[] = [], pileName = "rotation"): Promise<Pile | null> {
    if (!id || !cards) return null;

    const url = `${this.base}/${id}/pile/${pileName}/add?cards=${cards.join(",")}`;

    try {
      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      // ! WIP Handle error
      console.error(error);
    }

    return null;
  }
}

export default new CardService();
