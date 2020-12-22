const startPosition = 0;
const winningPosition = 100;
let newPosition = startPosition;
var RandomDieValue = 0;
var RandomPlayValue = 0;
var diceRollCount = 0;
var player1Position = 0;
var player2Position = 0;
var playerPosition = 0;

console.log(`\n ****** Welcome to snake and ladder game ******\n`);
console.log(`Start position is ${startPosition}`);
console.log(`Winning position is ${winningPosition} \n`);

console.log(`after rolling die ->`);

getRandomPlayValue = () => Math.floor(Math.random() * 3);

getRandomDieValue = () => Math.floor(Math.random() * 6) + 1;

getDiceCount = () => {
    ++diceRollCount;
    console.log(`dice count is: ${diceRollCount}`);
}

getPlayOption = (randomPlayValue, randomDieValue, newPosition) => {
    switch (randomPlayValue) {
        case 0:
            console.log(`no play`);
            newPosition = newPosition;
            break;
        case 1:
            console.log(`####### got ladder`);
            console.log(`roll th dice again again!!`)
            newPosition = randomDieValue + playGame(newPosition);
            if (newPosition > winningPosition) {
                newPosition -= randomDieValue;
            }
            break;
        case 2:
            console.log(`~~~~~~~< snake attack !!!`);
            newPosition -= randomDieValue;
            if (newPosition < startPosition) {
                newPosition = startPosition;
            }
            break;
        default:
            console.log(`Something went wrong !!`);
    }
    return newPosition;
}

playGame = (playerPosition) => {
    getDiceCount();
    var newPosition = playerPosition;
    var randomDieValue = getRandomDieValue();
    console.log(`die value is: ${randomDieValue}`);

    var randomPlayValue = getRandomPlayValue();
    return getPlayOption(randomPlayValue, randomDieValue, newPosition);
}

while (player1Position <= winningPosition || player2Position <= winningPosition) {
    var playerPosition = player1Position;
    var player1Position = playGame(playerPosition);
    console.log(`player 1 position is ${player1Position} \n`)

    if (player1Position == winningPosition) {
        console.log(`Hurray!!!! player 1 is winner`);
        diceRollCount = 0;
        break;
    }

    var playerPosition = player2Position;
    var player2Position = playGame(playerPosition);
    console.log(` player 2 position is ${player2Position} \n `)

    if (player2Position == winningPosition) {
        console.log(`Hurray!!!! player 2 is winner`);
        diceRollCount = 0;
        break;
    }
}

