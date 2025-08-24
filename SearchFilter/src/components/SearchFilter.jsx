import React, { useState } from "react";

const SearchFilter = () => {
  const items = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];
  const [Search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes((Search.toLowerCase()))
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Filter Project</h1>

      <input
        type="text"
        placeholder="Search fruits...."
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "200px", marginBottom: "20px" }}
      />

      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No results</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
