import React, { useState } from "react";

import StocksList from "./StocksList";

import stockslistfile from '../stocks-list.js';


const App = props => {
  //useEffect
  const [stocksList, setstocksList] = useState(stockslistfile);

  const [portfolio, setPortfolio] = useState([]);

  const [funds, setFunds] = useState(10000);

  console.log();

  const buyHandler = stock => {
    const orderprice = stocksList[stock.id].price;
    setFunds(funds - orderprice);
    addToPortfolio(stock);
  };

  const addToPortfolio = stock => {
    console.log(stock);
    console.log("portfolio b4 update: " + JSON.stringify(portfolio));

    let newPortfolio = portfolio;
    console.log("newPortfolio: " + JSON.stringify(newPortfolio));
    console.log("newPortfolio item to update: " + JSON.stringify(newPortfolio[stock.id]));
        console.log("check cond: " + (newPortfolio.id == stock.id) );

    if (newPortfolio[stock.id] != null) {
      console.log('haz stock');
      newPortfolio[stock.id].quantity = newPortfolio[stock.id].quantity + 1
    } else {
      console.log('no haz stock');
      stock.quantity = 1;
      newPortfolio = [...newPortfolio, stock];
    }

    setPortfolio(newPortfolio);

    console.log("prtflio after update: " + JSON.stringify(portfolio));
  }; 

  const resetHandler = () => {
    setFunds(10000);
    setPortfolio([]);
  }; 

  let content = (
    <React.Fragment>

      FUNDS: $ {funds} <br/>

      <StocksList
        buyHandler={buyHandler}
        stocksList={stocksList}
        currentFunds={funds}
      />
      
      <button onClick={resetHandler}>RESET!</button>

      {JSON.stringify(portfolio)}

    </React.Fragment>
  );

  return content;
};

export default App;
