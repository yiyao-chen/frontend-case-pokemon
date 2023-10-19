import React, { useState } from "react";

const SearchBar = ({ onSearch }: { onSearch: any }) => {
  const [searchTerm, setSearchTerm] = useState("bulbasaur");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter a Pokémon name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
