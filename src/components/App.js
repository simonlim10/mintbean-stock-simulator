import React, { useState } from "react";

import StocksList from "./StocksList";

const App = props => {

  const [selectedCharacter, setSelectedCharacter] = useState(1);

  const [portfolio, setPortfolio] = useState(null);

  const [funds, setFunds] = useState(10000);

  const charSelectHandler = event => {
    const charId = event.target.value;
    setSelectedCharacter(charId);
  };

  const buyHandler = event => {
    const stockSelected = event.target.value;
    setFunds(funds - 100);
  };

  const resetHandler = () => {
    setFunds(9000);
    setPortfolio(null);
  }; 

  let content = (
    <React.Fragment>

      FUNDS: $ {funds} <br/>

      <StocksList
        buyHandler={buyHandler}
      />

      <div className="console-log">zaz selectedCharacter: {selectedCharacter}</div>
      
      <button onClick={resetHandler}>RESET!</button>

    </React.Fragment>
  );

  return content;
};

export default App;
