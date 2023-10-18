import React from "react";
import { Pokemon } from "../types";

interface Props {
  pokemon?: Pokemon;
}

const InfoContainer: React.FunctionComponent<Props> = ({ pokemon: poke }) => {
  if (poke) {
    console.log(poke);

    return (
      <div className="infoContainer">
        <div className="imageContainer">
          <img
            src={poke.sprites.other.dream_world.front_default}
            alt={`${poke.name} illustration`}
          />
        </div>
        <h1>{poke.name}</h1>

        <div className="attributes">
          <p>Attributes</p>
          <p>NO. {poke.id}</p>
          <p>Height: {poke.height} dm</p>
          <p>Weight: {poke.weight} hg</p>
        </div>

        <div className="types">
          <h2>Types:</h2>
          {poke.types.map((type, index) => (
            <div className="type" key={index}>
              <p>{type.type.name}</p>
            </div>
          ))}
        </div>

        <div>
          <h2>Abilities:</h2>
          {poke.abilities.map((ability, index) => (
            <div className="ability" key={index}>
              <p>{ability.ability.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};
export default InfoContainer;
