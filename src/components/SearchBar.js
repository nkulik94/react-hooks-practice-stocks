import React from "react";

function SearchBar( { sort, filterBySector } ) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={(e) => {
            if (e.target.checked) sort('alph')
          }}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={(e) => {
            if (e.target.checked) sort('price')
          }}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={e => {
          e.target.value !== '' ? filterBySector(e.target.value) : filterBySector(false)
        }}>
          <option value={''}>--Choose Filter--</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
