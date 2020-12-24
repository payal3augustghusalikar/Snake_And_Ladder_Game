const START_POSITION = 0;
const WINNING_POSITION = 100;
let newPosition = START_POSITION;
var RandomDieValue = 0;
var RandomPlayValue = 0;
var diceRollCount = 0;
var player1Position = 0;
var player2Position = 0;
var playerPosition = 0;

console.log(`\n ****** Welcome to snake and ladder game ******\n`);
console.log(`Start position is ${START_POSITION}`);
console.log(`Winning position is ${WINNING_POSITION} \n`);

console.log(`after rolling die ->`);

/**
* @description gets random value for play option
*/
getRandomPlayValue = () => {
    var checkOption = Math.floor(Math.random() * 3);
    return (checkOption == 0) ? "No Play" : (checkOption == 1) ? "Got Ladder" : "Got Snake"
}

/**
   * @description gets random value for dice
   */
getRandomDieValue = () => Math.floor(Math.random() * 6) + 1;

getSnake = (newPosition, randomDieValue) => {
    console.log(`~~~~~~~< snake attack !!!`);
    newPosition -= randomDieValue;
    if (newPosition < START_POSITION) {
        newPosition = START_POSITION;
    }
}

getLadder = (newPosition, callback) => {
    console.log(`####### got ladder`);
    if (newPosition < WINNING_POSITION) {
        return callback(newPosition)
    }
    console.log(`roll the dice again!!`)
}

// checkLadderValue = (newPosition, randomDieValue) => {
//     newPosition += randomDieValue;
//     if (newPosition > WINNING_POSITION) {
//         newPosition -= randomDieValue;
//     }
//     getLadder(newPosition, playGame)
//     return newPosition;
// }

/**
    * @description gets dice count
    */
getDiceCount = () => {
    ++diceRollCount;
    console.log(`dice count is: ${diceRollCount}`);
}

/**
    * @description gets play option and calling respctive function
    */
getPlayOption = (randomPlayValue, randomDieValue, newPosition) => {
    switch (randomPlayValue) {
        case "No Play":
            // console.log(`no play`);
            newPosition = newPosition;
            break;
        case "Got Ladder":
            newPosition += randomDieValue;
            if (newPosition > WINNING_POSITION) {
                newPosition -= randomDieValue;
            }
            getLadder(newPosition, playGame)
            // checkLadderValue(newPosition, randomDieValue)
            break;
        case "Got Snake":
            if (newPosition < WINNING_POSITION) {
                getSnake(newPosition, randomDieValue);
            }
            break;
        default:
            console.log(`Something went wrong !!`);
    }
    return newPosition;
}

/**
    * @description takes two player 
    * @param {number} playerPosition
    */
playGame = (playerPosition) => {
    getDiceCount();
    var newPosition = playerPosition;
    var randomDieValue = getRandomDieValue();
    console.log(`die value is: ${randomDieValue}`);

    var randomPlayValue = getRandomPlayValue();
    return getPlayOption(randomPlayValue, randomDieValue, newPosition);
}

/**
 * @description checks winning position for player1Position and player2Position and calls play game function
 */
while (player1Position <= WINNING_POSITION || player2Position <= WINNING_POSITION) {
    var playerPosition = player1Position;
    var player1Position = playGame(playerPosition);
    console.log(`player 1 position is ${player1Position} \n`)

    // checks if playaer1Position reached to winning position
    if (player1Position == WINNING_POSITION) {
        console.log(`****** Hurray!!!! player 1 is winner ******`);
        diceRollCount = 0;
        break;
    }

    var playerPosition = player2Position;
    var player2Position = playGame(playerPosition);
    console.log(` player 2 position is ${player2Position} \n `)

    // checks if playaer2Position reached to winning position
    if (player2Position == WINNING_POSITION) {
        console.log(`****** Hurray!!!! player 2 is winner ******`);
        diceRollCount = 0;
        break;
    }
}

