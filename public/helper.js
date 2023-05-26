import items from "./objects";

const objectCat = Math.floor(Math.random() * 3);

const objectA =
  items[objectCat][Math.floor(Math.random() * items[objectCat].length)];

let objectB =
  items[objectCat][Math.floor(Math.random() * items[objectCat].length)];
while (objectB === objectA) {
  objectB =
    items[objectCat][Math.floor(Math.random() * items[objectCat].length)];
}

const valueA = Math.floor(Math.random() * 10) + 1;

let valueB = Math.floor(Math.random() * 10) + 1;
while (valueB === valueA) {
  valueB = Math.floor(Math.random() * 10) + 1;
}

let variable;
let minimum;
let addition = "";
if (objectCat === 0) {
  addition = "kg of";
  minimum = 1;
  variable = 10;
} else if (objectCat === 1) {
  minimum = 100;
  variable = 500;
} else if (objectCat === 2) {
  minimum = 1000;
  variable = 5000;
}

let priceA = 0;
let priceB = 0;
while (priceA <= minimum) {
  priceA = Math.floor(Math.random() * variable) + 1;
}
while (priceB <= minimum || priceB === priceA) {
  priceB = Math.floor(Math.random() * variable) + 1;
}

const resultOne = valueA * priceA + valueB * priceB;

const resultTwo = valueB * priceA + valueA * priceB;

const questionOption = [objectA, objectB];
const questionChoice = questionOption[Math.floor(Math.random() * 2)];

let question;
if (questionChoice === objectA) {
  question = priceA;
} else {
  question = priceB;
}

export {
  valueA,
  valueB,
  objectA,
  objectB,
  resultOne,
  resultTwo,
  question,
  addition,
  questionChoice,
};
