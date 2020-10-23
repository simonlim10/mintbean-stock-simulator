import React, { useState } from 'react';
import { useHttp } from '../hooks/http';

// import StockItem from './StockItem';

import stockslistfile from '../stocks-list.js';
import './StocksList.css';


const StocksList = props => {

  const availableStocks = props.stocksList
    ? props.stocksList.map(stock => ({
        id: stock.id,
        name: stock.name,
        price: stock.price,
        desc: stock.desc
      }))
    : [];

  const isLoading = !availableStocks;

  let content = <p>Loading stocks...</p>;

  if (!isLoading && availableStocks && availableStocks.length > 0) {
    content = (
      <React.Fragment>

        {availableStocks.map(stock => (
          <div className="stock-item" key={stock.id}>

            <span className="stock-item-name">{stock.name}</span><br />
            {stock.price}
            <button 
              value={stock.id} 
              onClick={() => props.buyHandler(stock)} 
            >
              BUY
            </button>
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
