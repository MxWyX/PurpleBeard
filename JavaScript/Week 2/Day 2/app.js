// Task 1

// const favFoods = ['Winegums','Gerkins','Chippies'];

// favFoods.forEach((item) => {
//   console.log(item);
// })

// Task 2

// const numArray = [5, 6, 7, 8, 9];

// const sum = (arr) => {
//   let sum = 0;
//   arr.forEach((item) => {
//     sum += item;
//   });
//   return sum;
// };

// console.log(sum(numArray));

// Task 3

// const numArray = [5, 6, 7, 8, 9];

// const product = (arr) => {
//   let product = 1;
//   arr.forEach((item) => {
//     product *= item;
//   });
//   return product;
// };

// console.log(product(numArray));

// // Task 4

// const studentGrades = [70, 20, 53, 64, 78, 60, 32];

// const passedGrades = (arr) => {
//   let passed = [];
//   arr.forEach((element) => {
//     if (element > 50) {
//       passed.push(element);
//     }
//   });
//   return passed;
// };

// console.log(passedGrades(studentGrades));

// Task 5

// const students = ["Max", "Eloise", "Rossi"];

// console.log(students.join(" "));

// Task 6

// const cars = ["Volvo", "Skoda", "Land Rover", "Jaguar"];

// const toCSV = (arr) => {
//   return arr.join(",");
// };

// console.log(toCSV(cars));

// Task 7

// const kilometers = [36, 29, 74, 16, 58];

// let miles = kilometers.map(
//   (km) => km * 0.62137
// );

// console.log(miles);
// .map references a function, putting it inside a function creates the need for anoterh function.

// Task 8

// const inputArray = ["18", "27", 19, 21, "22 ", NaN, undefined];

// let ages = inputArray.filter((arr) => arr > 0);

// console.log(ages);

// Task 9

// const ages = [21, 16, 45, 32, 18, 17, 19, 55, 60];

// const canVote = ages.filter((age) => age > 18);

// console.log(canVote);

// Task 10

// const numArray = [21, 16, 45, 32, 18, 17, 19, 55, 60];

// const sum = numArray.reduce((total, current) => {
//   return total + current;
// }, 0);

// console.log(sum);

// Task 11

// const numArray = [21, 16, 45, 32, 18, 17, 19, 55, 60];

// const product = numArray.reduce((total, current) => {
//   return total * current;
// }, 1);

// console.log(product);
