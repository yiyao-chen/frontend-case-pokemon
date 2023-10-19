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
            {poke.moves
              .filter((_, index) => index < 2) // get first two moves
              .map((move, index) => (
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

          <div className="abilities">
            <h3>Abilities:</h3>
            {poke.abilities.map((ability, index) => (
              <div className="ability" key={index}>
                <p>{ability.ability.name}</p>
              </div>
            ))}
          </div>

          <div className="moves">
            <h3>Moves:</h3>
            {poke.moves
              .filter((_, index) => index < 2) // get first two moves
              .map((move, index) => (
                <div className="move" key={index}>
                  <p>{move.move.name}</p>
                </div>
              ))}
          </div>

          <div className="types">
            {poke.types.map((type, index) => (
              <div className="type" key={index}>
                <p>{type.type.name}</p>
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
