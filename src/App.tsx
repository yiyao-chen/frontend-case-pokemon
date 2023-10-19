import React, { useEffect, useState } from "react";
import { fetchPokemon } from "./utils";
import { Pokemon } from "./types";

import InfoContainer from "./components/InfoContainer";

import "./app.css";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [searchTerm, setSearchTerm] = useState<string>("bulbasaur");

  useEffect(() => {
    fetchPokemon(searchTerm).then((res) => setPokemon(res));
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="appRoot">
      <SearchBar onSearch={handleSearch} />
      <InfoContainer pokemon={pokemon} />
    </div>
  );
};

export default App;
