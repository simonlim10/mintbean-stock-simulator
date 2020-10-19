import React, { useState } from 'react';
import { useHttp } from '../hooks/http';

// import StockItem from './StockItem';

import './StocksList.css';

import stockslistfile from '../stocks-list.js';

const StocksList = props => {

  const [stocksList, setstocksList] = useState(stockslistfile);

  const availableStocks = stocksList
    ? stocksList.map(stock => ({
        name: stock.name,
        price: stock.price
      }))
    : [];

  console.log("zaz stocksList: " + JSON.stringify(stocksList));
  console.log("zaz availableStocks: " + JSON.stringify(availableStocks));

  const isLoading = !availableStocks;

  let content = <p>Loading stocks...</p>;

  if (!isLoading && availableStocks && availableStocks.length > 0) {
    content = (
      <React.Fragment>

        {availableStocks.map(stock => (
          <div className="stock-item">

            <span className="stock-item-name">{stock.name}</span><br />
            {stock.price}

            <button value={stock.name} onClick={props.buyHandler}>BUY</button>
            <button value={stock.name} onClick="">SELL</button>

          </div>
        ))}

      </React.Fragment>
    );
  } else if (
    !isLoading &&
    (!availableStocks || availableStocks.length === 0)
  ) {
    content = <p>Could not fetch any stocks data.</p>;
  }
  return content;
};

export default StocksList;
