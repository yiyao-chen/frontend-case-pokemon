import React from "react";
import { Pokemon } from "../types";

interface Props {
  pokemon?: Pokemon;
  isFlipped: boolean;
}

const InfoContainer: React.FunctionComponent<Props> = ({
  pokemon: poke,
  isFlipped,
}) => {
  console.log("isFlipped");
  console.log(isFlipped);
  if (poke) {
    console.log(poke);

    if (isFlipped) {
      // back side
      return (
        <div className="infoContainer">
          <h1>{poke.name}</h1>

          <div>
            <h3>Abilities:</h3>
            {poke.abilities.map((ability, index) => (
              <div className="ability" key={index}>
                <p>{ability.ability.name}</p>
              </div>
            ))}
          </div>

          <div>
            <h3>Moves:</h3>
            {poke.moves.splice(0, 2).map((move, index) => (
              <p>{move.move.name}</p>
            ))}
          </div>
        </div>
      );
    } else {
      // front side
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
            <p>NO. {poke.id}</p>
            <p>Height: {poke.height} dm</p>
            <p>Weight: {poke.weight} hg</p>
          </div>

          <div className="types">
            {poke.types.map((type, index) => (
              <div className="type" key={index}>
                <p>{type.type.name}</p>
              </div>
            ))}
          </div>

          <div>
            <h3>Abilities:</h3>
            {poke.abilities.map((ability, index) => (
              <div className="ability" key={index}>
                <p>{ability.ability.name}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

  return null;
};
export default InfoContainer;
