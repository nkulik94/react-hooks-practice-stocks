import React from "react";

function Stock( { stock, onTransaction } ) {
  return (
    <div>
      <div className="card" onClick={() => onTransaction(stock)}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{`${stock.ticker}: ${stock.price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
