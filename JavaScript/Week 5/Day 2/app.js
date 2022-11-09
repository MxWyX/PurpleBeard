// //  Task 1

class User {
  constructor(fName, lName) {
    this._firstName = fName;
    this._lastName = lName;
  }

  greeting() {
    return `Hello, my name is ${this._firstName} ${this._lastName}. Who are you?`;
  }
}

const user1 = new User("Jeremy", "Usborne");
console.log(user1.greeting());

// // Task 2

class Admin extends User {
  constructor() {
    super();
    this._admin = true;
  }

  get admin() {
    return this._admin;
  }
}

const user2 = new Admin("Mark", "Corrigan");
console.log(user2.admin);

// // Task 3

// A

class Shape {
  constructor(name, sides, sideLength) {
    this._name = name;
    this._sides = sides;
    this._sideLength = sideLength;
  }

  calcPerimeter() {
    return this._sides * this._sideLength;
  }
}

const square = new Shape("Square", 4, 5);
console.log(square.calcPerimeter());

const triangle = new Shape("Triangle", 3, 3);
console.log(triangle.calcPerimeter());

// B

class Square extends Shape {
  constructor(_sideLength) {
    super("square", 4, _sideLength);
  }

  calcArea() {
    return this._sideLength * this._sideLength;
  }

  get info() {
    let area = this._sideLength * this._sideLength;
    return `The area of a ${this._name} ${this._sideLength} is ${area}`;
  }
}

const square2 = new Square(5);
console.log(square2._sideLength);
console.log(square2.info);

// // Task 4

class Animal {
  constructor(name, group, sound) {
    this.name = name;
    this.group = group;
    this.sound = sound;
  }

  get info() {
    return `This is a ${this.name} it is a ${this.group} and it ${this.sound}s`;
  }
}

const animal1 = new Animal("quail", "bird", "chirp");
console.log(animal1.info);

// // task 5

class Animal2 {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Lion extends Animal2 {
  constructor() {
    super();
  }

  speak() {
    return `${this.name} roars`;
  }
}

const animal2 = new Lion("Neil");
console.log(animal2.speak());

///////////////// Spread Operators

// // Task 1

const studentsGood = ["bob", "daphne", "mark", "lizzie II"];
const studentsBad = ["risho", "danny", "max", "philly"];

console.log(...studentsGood, ...studentsBad);

// Task 2

const name = "Max";
let lName = [...name];
console.log(lName);

// Deconstruction excersises

// I'll do em another time lol

// General exercises

// 1

const reverse = (word) => {
  let wordL = [...word];
  let drowL = [];
  for (let i = 0; i < wordL.length; i++) {
    drowL.unshift(wordL[i]);
  }
  let drow = drowL.join("");
  return drow;
};

console.log(reverse("Bo bibbidy"));

// 2

const strip = (word) => {
  let clean = word.replaceAll(" ", "");
  return clean;
};

console.log(strip("  B  O B  I GG I T  Y   "));

const nums = () => {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    arr.push(Math.floor(Math.random() * 1000 + 1));
  }
  return arr.sort();
};

const median = (nums) => {
  let medInd = Math.floor(nums.length / 2);
  return nums[medInd];
};

const mean = (nums) => {
  let total = nums.reduce((partialSum, a) => partialSum + a, 0);
  return Math.floor(total / nums.length);
};

const slicer = (nums) => {
  let slices = [];
  while (nums.length) {
    slices.push(nums.splice(0, 20));
  }
  return slices;
};

const printer = () => {
  let numArr = nums();
  console.log(numArr);
  console.log(median(numArr));
  console.log(mean(numArr));
  console.log(slicer(numArr));
};

printer();
