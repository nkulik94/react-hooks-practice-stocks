import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, updateStocks] = useState([])
  const [portfolioStocks, updatePortfoilo] = useState([])
  const [sortedBy, sort] = useState(null)
  const [filteredBy, updateFilter] = useState(false)
  
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

  const filteredList = filteredBy ? stockList.filter(stock => stock.type === filteredBy) : stockList

  function sortByPrice() {
    return filteredList.sort((a, b) => a.price - b.price)
  }

  function sortByTicker() {
    return (
      filteredList.sort(function(a, b){
        let x = a.ticker.toLowerCase();
        let y = b.ticker.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      })
    );
  }

  let sortedList
  if (sortedBy) {
    sortedList = sortedBy === 'price' ? sortByPrice() : sortByTicker()
  } else sortedList = filteredList
  

  return (
    <div>
      <SearchBar sort={sort} filterBySector={updateFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={sortedList} onBuy={handleBuyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} onSell={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
