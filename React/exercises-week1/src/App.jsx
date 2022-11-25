import "./App.css";
// import Task1 from "./Components/Task1";
// import Task2 from "./Components/Task2";
import Cards from "./Components/Cards";
import "./Components/Cards.css";

function App() {
  // // Task 1
  // const customer = {
  //   first_name: "Bob",
  //   last_name: "Dylan",
  // };
  // // Task2
  // const animals = ["Horse", "Turtle", "Elephant", "Monkey"];
  // //

  return (
    <div className="cardFlex">
      {/* <Task1 customer={customer} />
      <Task2 animals={animals} /> */}

      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}

export default App;
