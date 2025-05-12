import React from "react";
import { UseAccountContext } from "../../config/AccountContext";

function SearchBar() {
  const { searchTerm, setSearchTerm } = UseAccountContext();

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="search"
        placeholder="Search for pdf..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  );
}

export default SearchBar;
