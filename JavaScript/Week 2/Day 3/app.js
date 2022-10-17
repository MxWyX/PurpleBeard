// Task 1

const spacecraft = {
  size: "300m",
  range: "5,000,000,000km",
  model: "Nostromo",
  capacity: "50 people",
};

console.log(spacecraft.range);

// for (let [key, value] of Object.entries(spacecraft)) {
//   console.log(`${key}: ${value}`);
// }

console.log("hello");

const spacecraftInfo = [];
const spacecraftData = [];

for (let i in spacecraft) {
  spacecraftInfo.push(i);
  spacecraftData.push(spacecraft[i]);
}

console.log(spacecraftInfo);
console.log(spacecraftData);

// Previous project I've made with Objects that contain Arrays of more Objects

// const team = {
//   _players: [
//     { firstname: "Max", lastName: "Wykes", age: 23 },
//     { firstname: "Eloise", lastName: "Westbrook", age: 23 },
//     { firstname: "Mike", lastName: "Hunt", age: 69 },
//   ],
//   _games: [
//     { opponent: "Meltdowns", teamPoints: "2", opponentPoints: "20" },
//     { opponent: "Redsox", teamPoints: "25", opponentPoints: "8" },
//     { opponent: "Renegades", teamPoints: "17", opponentPoints: "13" },
//   ],
//   get players() {
//     return this._players;
//   },
//   get games() {
//     return this._games;
//   },
//   addPlayer(newFirstName, newLastName, newAge) {
//     let player = {
//       firstname: newFirstName,
//       lastname: newLastName,
//       age: newAge,
//     };
//     this._players.push(player);
//   },
//   addGame(newOpponent, newTeamPoints, newOpponentPoints) {
//     let game = {
//       opponent: newOpponent,
//       teamPoints: newTeamPoints,
//       opponentPoint: newOpponentPoints,
//     };
//     this._games.push(game);
//   },
// };

// team.addPlayer("Bugs", "Bunny", 76);
// console.log(team.players);
// team.addGame("Titans", 100, 98);
// console.log(team.games);
