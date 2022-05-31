import React from "react";
import Stock from "./Stock";

function StockContainer( { stockList, onBuy } ) {
  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map(stock => <Stock stock={stock} key={stock.id} onTransaction={onBuy} />)}
    </div>
  );
}

export default StockContainer;
