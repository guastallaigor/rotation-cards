<div align="center">
  <img src="./public/img/icons/android-chrome-192x192.png" width="192px" alt="logo">
  <h1>Rotation Cards</h1>
</div>

<p align="center">
  Rotation Cards is a project that consumes <a href="http://deckofcardsapi.com/" target="_blank">Decks of Cards API</a>
</p>

> **Note:**
> This project is still a WIP

## Quick Start

Fork the project and enter this commands in your terminal

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/rotation-cards.git
cd rotation-cards
npm install
npm run dev
```

You will need `Node v8.11.0+` installed

Otherwise, just clone it or download the project as a ZIP.

By default it runs on port `8080`

So you can then check in your browser at http://localhost:8080

## Routes

| Route     | Description                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| /deck/new | First page, that has 10 cards inputs, the rotation card input, and the submit button                                 |
| /deck/:id | Second page, that has all the cards typed in the first page, the highest card and all of the full house combinations |
| /\*       | Page not found                                                                                                       |

## Tests

### Jest

WIP

#### Cypress (E2E)

WIP

## Production

To build the project to production, run `npm run build` in the root folder
