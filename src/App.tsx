import React, { useEffect, useState } from "react";
import { fetchPokemon } from "./utils";
import { Pokemon } from "./types";

import InfoContainer from "./components/InfoContainer";

import "./app.css";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [searchTerm, setSearchTerm] = useState<string>("bulbasaur");
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    fetchPokemon(searchTerm).then((res) => setPokemon(res));
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`appRoot ${isFlipped ? "flipped" : ""}`}>
      <div className="searchbar-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="card-container">
        <div className={`info-card ${isFlipped ? "flipped" : ""}`}>
          <InfoContainer pokemon={pokemon} isFlipped={isFlipped} />
          <button onClick={handleFlip} className="flip-button">
            Flip Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
