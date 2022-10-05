

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


function heightTest() {
  const height = prompt('What\'s your height');
  if ( Number(height)+0) {
    if (height >= 150) {
      alert('You can go on the ride!');
    } else {
      alert('Sorry you aren\'t tall enough');
    }
  } else {
    alert('Please enter a height');
  }
};

heightTest();