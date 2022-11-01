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

// // Task 4

class Animal {
  constructor(name, group, sound) {
    this._name = name;
    this._group = group;
    this._sound = sound;
  }
  get info() {
    return `This is a ${this._name} it is a ${this._group} and it ${this._sound}s`;
  }
}

const animal1 = new Animal("quail", "bird", "chirp");
console.log(animal1.info);

// // task 5

class Animal2 {
  constructor(name) {
    this._name = name;
  }
  speak() {
    return `${this._name} makes a noise.`;
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

const studentsGood = ["bod", "daphne", "mark", "lizzie II"];
const studentsBad = ["risho", "danny", "max", "philly"];
