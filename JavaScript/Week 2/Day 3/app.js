// Task 1

const spacecraft = {
  size: "300m",
  range: "500,000km",
  model: "Nostromo",
  capacity: "50 people",
};

console.log(spacecraft.range);

for (let [key, value] of Object.entries(spacecraft)) {
  console.log(`${key}: ${value}`);
}
