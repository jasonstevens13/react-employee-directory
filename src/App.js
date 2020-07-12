import React from "react";
import Jumbotron from "./components/Jumbotron";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Jumbotron />
      <div className="container">
        <Table />
      </div>
    </>

  );
}

export default App;
