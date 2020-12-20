const startPosition = 0;
const WinningPosition = 100;
let newPosition = startPosition;
var RandomDieValue = 0;
var RandomPlayValue = 0;

console.log(`\n ****** Welcome to snake and ladder game ******\n`);
console.log(`Start position is ${startPosition}`);
console.log(`Winning position is ${WinningPosition} \n`);

console.log(`after rolling die ->`);

while(newPosition < WinningPosition) {

    getRandomDieValue = () => randomCheck = Math.floor(Math.random() * 6) + 1;
    var RandomDieValue = getRandomDieValue();
    console.log(`die value is: ${RandomDieValue}`);

    getRandomPlayValue = () => randomCheck = Math.floor(Math.random() * 3);
    var RandomPlayValue = getRandomPlayValue();
    console.log(`play value is : ${RandomPlayValue}`);

    if(RandomPlayValue == 0) {
        console.log(`no play`);
        newPosition = newPosition;
    }
    else if(RandomPlayValue == 1) {
        console.log(`got ladder`);
        newPosition += RandomDieValue;
    }
    else if(RandomPlayValue == 2) {
        console.log(`snake attack`);
        newPosition -= RandomDieValue;	
    }

    console.log(`new position is : ${newPosition}`);
}


