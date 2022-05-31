import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, updateStocks] = useState([])
  const [portfolioStocks, updatePortfoilo] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(r => r.json())
      .then(list => updateStocks(list))
  }, [])

  function handleBuyStock(stock) {
    if (!portfolioStocks.find(s => s.id === stock.id)) updatePortfoilo([...portfolioStocks, stock])
  }

  function handleSellStock(stock) {
    updatePortfoilo(portfolioStocks.filter(s => s.id !== stock.id))
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} onBuy={handleBuyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} onSell={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
