const startPosition=0;
const WinningPosition=100;
let newPosition=0;

console.log(`\n ****** Welcome to snake and ladder game ******\n`);
console.log(`Start position is ${startPosition}`);
console.log(`Winning position is ${WinningPosition} \n`);

getRandomDieValue = () => randomCheck = Math.floor(Math.random() * 6) + 1;

console.log(`after rolling die ->`);
newPosition = newPosition + getRandomDieValue();
console.log(`New position is ${newPosition} `);