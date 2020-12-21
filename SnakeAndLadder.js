const startPosition = 0;
const WinningPosition = 100;
let newPosition = startPosition;
var RandomDieValue = 0;
var RandomPlayValue = 0;
var diceRollCount=0;
var player1Position=0;
var player2Position=0;
var playerPosition = 0;

console.log(`\n ****** Welcome to snake and ladder game ******\n`);
console.log(`Start position is ${startPosition}`);
console.log(`Winning position is ${WinningPosition} \n`);

console.log(`after rolling die ->`);

getRandomPlayValue = () => Math.floor(Math.random() * 3);

getRandomDieValue = () => Math.floor(Math.random() * 6) + 1;



 PlayGame = (playerPosition) => {
   // while(newPosition < WinningPosition) {

var newPosition = playerPosition;
        ++diceRollCount;
        console.log(`dice count is: ${diceRollCount}`);

        var RandomDieValue = getRandomDieValue();
        console.log(`die value is: ${RandomDieValue}`);

        var RandomPlayValue = getRandomPlayValue();
        switch(RandomPlayValue) {

            case 0:
                console.log(`no play`);
                 newPosition = newPosition;
                break;

            case 1:
                console.log(`got ladder`);
                newPosition = RandomDieValue + PlayGame(newPosition);
                if(newPosition > WinningPosition) {
                    newPosition -= RandomDieValue;	
                }
                break;

            case 2:
                console.log(`snake attack`);
                newPosition -= RandomDieValue;
                if(newPosition < startPosition) {
                    newPosition = startPosition;
                }
                break;

                default:    
                console.log(`Something went wrong !!`);
            }

           // console.log(`new position is : ${newPosition} \n`);
            // if (newPosition == 100) {
            //     console.log("congratulations player reached to winning position");
            //     console.log("====== Game ended =====");
               
                return newPosition;
            }
    
//}
while(player1Position <= WinningPosition || player2Position <= WinningPosition) {
var playerPosition = player1Position;
var player1Position = PlayGame(playerPosition);
console.log(`player 1 position is ${player1Position} \n`)

if(player1Position == WinningPosition ) {
    console.log(`player 1 is winner`);
    diceRollCount = 0;
    break;
    }


var playerPosition = player2Position;
var player2Position = PlayGame(playerPosition);
console.log(`player 2 position is ${player2Position} \n `)


if(player2Position == WinningPosition ) {

    console.log(`player 2 is winner`);
    diceRollCount = 0;
    break;
    }


// if(player1Position == WinningPosition ) {
// console.log(`player 1 is winner`);
// diceRollCount = 0;
// }
// else if(player2Position == WinningPosition ) {

// console.log(`player 2 is winner`);
// diceRollCount = 0;
// }
}