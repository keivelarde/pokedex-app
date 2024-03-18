import React from "react";
import { Link } from "react-router-dom";
import { primerMayuscula } from "../helper/helper";

export const CardPokemon = ({ pokemon }) => {
  const formatId = (id) => {
    return String(id).padStart(3, "0");
  };

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
      <div className="card-img">
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatId(
            pokemon.id
          )}.png`}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className="card-info">
        <span className="pokemon-id"># {pokemon.id}</span>
        <span className="pokemon-name">{primerMayuscula(pokemon.name)}</span>
        <div className="card-types">
          {pokemon.types.map((type) => (
            <span key={type.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
