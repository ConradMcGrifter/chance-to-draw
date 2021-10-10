// grab values from the inputs to get the deck size (40 cards or 60 cards) and number of lands (as well as the types of the land?)

let deckSize = 40; // get from input
let numLands = 17; // get from input
let startHandSize = 7; // get from input
let startLands = 3; // get from input

// const NOT_LAND // this will be a button the user clicks if he draws a card and it is not a land and --> it will decrease deckSize
const notALand = () => {
    deckSize--;
};
// const LAND // this will be a button the user clicks if he draws a land --> it will decrease the numLands variable
const isALand = () => {
    numLands--;
    deckSize--;
};

const calculateChance = (deckSize, numLands) => {
    let result = (numLands - startLands) / (deckSize - startHandSize);

    return result.toFixed(2) * 100;
};

// get the number of lands in hand at the start of the game (have the user input the number) then calculate and display the chance of drawing a land

// make a button that you can click every time you draw a land to get a new percent chance of drawing a land (lower the card count by 1 every time the button is clicked)
// have a button for each card you draw either land or not land to adjust the numbers

// notALand();
// notALand();
// notALand();
// notALand();
// notALand();
// notALand();
// isALand();
// isALand();

// console.log(deckSize);
console.log(numLands);
// console.log(calculateChance(deckSize, numLands));
// console.log(calculateChance(deckSize, numLands));
