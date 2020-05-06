import React from "react";
// import {apex} from 'apexlegendsjs'
import "./App.css";

console.log("api", process.env.REACT_APP_APEX_KEY);

function App() {
  // const { REACT_APP_APEX_KEY } = process.env;
  // const apex = require("apexlegendsjs")(REACT_APP_APEX_KEY);

  // //Returns basic core statistics about the player
  // apex
  //   // .getPlayer("DJ vos SLC", "XBOX") //or XBOX or PSN
  //   .getPlayer("playerName", "PC") //or XBOX or PSN
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // //Returns more detailed information about the player
  // apex
  //   // .getDetailedPlayer("DJ vos SLC", "XBOX") //or XBOX or PSN
  //   .getDetailedPlayer("playerName", "PC") //or XBOX or PSN
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // console.log(apex.getPlayer("DJ vos SLC", "XBOX"));
  return (
    <div className="App">
      <h1>App.js</h1>
    </div>
  );
}

export default App;
