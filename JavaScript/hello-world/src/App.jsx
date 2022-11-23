import React from "react";
import "../General.css";

function App() {
  let props = "This is passed from a prop";
  return (
    <div>
      <Header props={props} />
      <Footer />
    </div>
  );
}

export default App();
