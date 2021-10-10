// grab values from the inputs to get the deck size (40 cards or 60 cards) and number of lands (as well as the types of the land?)

let deckSize = 40; // get from input
let numLands = 17; // get from input
let startHandSize = 7; // get from input
let startLands = 3; // get from input

const NOT_LAND = document.querySelector("#notALand");
const LAND = document.querySelector("#isALand");

const notALand = () => {
    deckSize--;
};

const isALand = () => {
    numLands--;
    deckSize--;
};

const calculateChance = () => {
    let result = (numLands - startLands) / (deckSize - startHandSize);

    return (result * 100).toFixed(0);
};

NOT_LAND.addEventListener("click", () => {
    if (numLands - startLands === 0) {
        console.log("no more lands");
        return;
    }
    notALand();
    calculateChance();
    console.log(`${calculateChance()}% chance to draw a land`);
    console.log(
        `${deckSize - startHandSize} cards left in deck -- ${
            numLands - startLands
        } lands left in deck`
    );
});

LAND.addEventListener("click", () => {
    if (numLands - startLands === 0) {
        console.log("no more lands");
        return;
    }
    isALand();
    calculateChance();
    console.log(`${calculateChance()}% chance to draw a land`);
    console.log(
        `${deckSize - startHandSize} cards left in deck -- ${
            numLands - startLands
        } lands left in deck`
    );
});

calculateChance();
// get the number of lands in hand at the start of the game (have the user input the number) then calculate and display the chance of drawing a land

// make a button that you can click every time you draw a land to get a new percent chance of drawing a land (lower the card count by 1 every time the button is clicked)
// have a button for each card you draw either land or not land to adjust the numbers
