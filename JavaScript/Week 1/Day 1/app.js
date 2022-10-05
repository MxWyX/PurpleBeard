
let a = 15;
let b = 28;

const calc = {
  print: function (a) {
    console.log(a)
  },
  add: function(a,b) {
    console.log(a+b)
  },
  subtract: function(a,b) {
    console.log(a-b)
  },
  multiply: function(a,b) {
    console.log(a*b)
  },
  divide: function(a,b) {
    console.log(a/b)
  },
  mod: function(a,b) {
    console.log(a%b)
  },
  circle : {
    pi: '3.14159265359',
    area: function(r) {
      console.log(this.pi * r^2)
    },
    circum: function(r) {
      console.log(2 * this.pi * r)
    }
  }
};

calc.add(12,14);
calc.subtract(21,16);
calc.multiply(5,3);
calc.divide(4,16);
calc.mod(3,9)

calc.circle.area(4);
calc.circle.circum(6);