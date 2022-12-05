import logo from "./logo.svg";
import "./App.css";
import Accordion from "./Compnents/Accordian/AccordianMain.jsx";
// import Team from "";
import MovieCards from "./Compnents/Movies/MovieCards";

function App() {
  return (
    <div className="App">
      <MovieCards />
      <Accordion />
      {/* <Team /> */}
      {/* <Menu /> */}
    </div>
  );
}

export default App;
