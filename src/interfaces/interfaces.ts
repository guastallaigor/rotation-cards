export interface Cards {
  image: string;
  value: string;
  suit: string;
  code: string;
}

export interface Rotation {
  remaining: number;
  cards?: Cards;
}

export interface Piles {
  rotation: Rotation;
}

export interface Pile {
  success: boolean;
  deck_id: string;
  remaining: number;
  piles: Piles;
}

export interface AddPile {
  cards: string[];
}

export interface NewDeck {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}
