import React from "react";
import Stock from "./Stock";

function PortfolioContainer( { portfolioStocks, onSell } ) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks.map(stock => <Stock stock={stock} key={stock.id} onTransaction={onSell} />)}
    </div>
  );
}

export default PortfolioContainer;
