//Nishi Bipin Mehta (101514172)
//COMP3123 (Full-Stack Development I)
//Lab 02

//EXERCISE 01

const gretter = (myArray) => {
  const greetText = 'Hello';
  for (const name of myArray) {
    console.log(`${greetText} ${name}`);
  }
};

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);


//EXERCISE 02

const capitalize = (str) => {
  const [first, ...rest] = str;
  return `${first.toUpperCase()}${rest.join('')}`;
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));


//EXERCISE 03

const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);


//EXERCISE 04

const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);


//EXERCISE 05

const array = [1, 2, 3, 4];

const calculateSum = array.reduce((acc, n) => acc + n, 0);
const calculateProduct = array.reduce((acc, n) => acc * n, 1);

console.log(calculateSum);
console.log(calculateProduct);


//EXRECISE 06

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  details() {
    return `Model: ${this.model} Engine ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }
  info() {
    return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
  }
}

// Given examples
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());

