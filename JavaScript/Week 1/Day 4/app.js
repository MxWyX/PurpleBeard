
// Excersise 1
// function helloWorld() {
//   alert('Hello World!')
// };

// helloWorld()

// Excersise 2
// function quadrupler(number) {
//   return number*4
// };

// alert(quadrupler(4))

// Excersise 3
// function welcome(first,last) {
//   first = first.toLowerCase()
//   last = last.toUpperCase()
//   return `Hello ${first} ${last}, how can I help you?`
// };

// function nameGet() {
//   const firstName = prompt('Please enter your first name.')
//   const lastName = prompt('Please enter your last name.')
//   alert(welcome(firstName,lastName))
// };

// nameGet()

// Excersise 4
// function temperatureConverter(farenheit) {
//   return Math.round((farenheit - 32) * (5/9))
// };

// alert(temperatureConverter(100))

// Excersise 5
// function dogYears(name,age) {
//   let dogAge = 0
//   for (let i = 0; i < age; i++) {
//     if (i === 1 ) {
//       dogAge+=15;
//     } else if (i === 2) {
//       dogAge+=9;
//     } else {
//       dogAge+=5;
//     }
//   };
//   return `${name} is ${dogAge} years old in dog years.`;
// };

// alert(dogYears('Max',24));

// Excersise 6
// function calculator(num1,op,num2) {
//   if (typeof num1 === 'number' && typeof num2 == 'number') {
//     if (typeof op === 'string') {
//       if (op === '+') {
//         return num1+num2;
//       } else if (op === '-') {
//         return num1-num2;
//       } else if (op === '*') {
//         return  num1*num2;
//       } else if (op === '/') {
//         return num1/num2;
//       }
//     } else {
//       return 'That operator is not valid';
//     }
//   } else {
//     return 'One of those numbers, isn\'t a number...';
//   }
// };

// alert(calculator(4,'+',6));

// Excersise 7
// function min(a,b) {
//   if (a<b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// alert(min(3,20));

// Excersise 8

// const pow = (x,n) => {
//   return Math.pow(x,n);
// }

// alert(pow(2,4));