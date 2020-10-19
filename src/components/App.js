import React, { useState } from "react";

import StocksList from "./StocksList";

const App = props => {

  const [portfolio, setPortfolio] = useState(null);

  const [funds, setFunds] = useState(10000);

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
      
      <button onClick={resetHandler}>RESET!</button>

    </React.Fragment>
  );

  return content;
};

export default App;
