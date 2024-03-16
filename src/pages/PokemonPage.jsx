import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader } from "../components";
import { PokemonContext } from "../context/PokemonContext";
import { primerMayuscula } from "../helper/helper";
import ProgressBar from "@ramonak/react-progress-bar";

export const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };
  const formatId = (id) => {
    return String(id).padStart(3, "0");
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  //   const getTypeInfo = (type) => {
  //     switch (type) {
  //       case "grass":
  //         return "Information about Grass type...";
  //       case "poison":
  //         return "Information about Fire type...";
  //       // Add cases for other types as needed
  //       default:
  //         return "Information not available";
  //     }
  //   };
  const typeInfo = {
    normal: "Rock, Ghost, Steel",
    fighting: "Flying, Poison, Psychic, Bug, Ghost, Fairy",
    flying: "Rock, Steel, Electric",
    poison: "Poison, Ground, Rock, Ghost, Steel",
    ground: "Flying, Bug, Grass",
    rock: "Fighting, Ground, Steel",
    bug: "Fighting, Flying, Poison, Ghost, Steel, Fire, Fairy",
    ghost: "Normal, Dark",
    steel: "Steel, Fire, Water, Electric",
    fire: "Rock, Fire, Water, Dragon",
    water: "Water, Grass, Dragon",
    grass: "Flying, Poison, Bug, Steel, Fire, Grass, Dragon",
    electric: "Ground, Grass, Electric, Dragon",
    psychic: "Steel, Psychic, Dark",
    ice: "Steel, Fire, Water, Ice",
    dragon: "Steel, Fairy",
    dark: "	Fighting, Dark, Fairy",
    fairy: "Poison, Steel, Fire",
    default: "Information not available",
  };

  const getTypeInfo = (type) => {
    return typeInfo[type] || typeInfo.default;
  };

  return (
    <main className="container main-pokemon">
      {loading ? (
        <Loader />
      ) : (
        <>
          <span className="number-pokemon">#{pokemon.id}</span>{" "}
          <div className="header-main-pokemon">
            <div className="container-img-pokemon">
              {/* <img
								src={pokemon.sprites.other.dream_world.front_default}
								alt={`Pokemon ${pokemon?.name}`}
							/> */}
              <img
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatId(
                  pokemon.id
                )}.png`}
                alt={`Pokemon ${pokemon.name}`}
              />
            </div>
          </div>
          <div className="container-info-pokemon">
            <h2 className="number-pokemon">{primerMayuscula(pokemon.name)}</h2>
            <div className="card-types info-pokemon-type">
              {pokemon.types.map((type) => (
                <span key={type.type.name} className={`${type.type.name}`}>
                  {type.type.name}
                </span>
              ))}
            </div>

            {/* Display type information */}
            <div className="info-pokemon">
              <div className="group-info">
                <p>Height</p>
                <span>{pokemon.height * 10} cm</span>
              </div>
              <div className="group-info">
                <p>Weight</p>
                <span>{pokemon.weight / 10} KG</span>
              </div>
              <div className="group-info">
                <p>Ability/s</p>
                {pokemon.abilities.map((ability) => (
                  <span key={ability.ability.name}>
                    {primerMayuscula(ability.ability.name)}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="container-stats">
            <div className="stats">
              <div className="stat-group">
                <span className="stat-label">Hp</span>
                {/* <div className="progress-bar"></div> */}
                <ProgressBar
                  className="progress-bar"
                  completed={pokemon.stats[0].base_stat.toString()}
                  bgColor="#9bcc50"
                  baseBgColor="#4d5b64"
                  height="1.5rem"
                  borderRadius="0.5rem"
                />
                <span className="counter-stat">
                  {pokemon.stats[0].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span className="stat-label">Attack</span>
                <ProgressBar
                  className="progress-bar"
                  completed={pokemon.stats[1].base_stat.toString()}
                  bgColor="#C70000"
                  baseBgColor="#4d5b64"
                  height="1.5rem"
                  borderRadius="0.5rem"
                />
                <span className="counter-stat">
                  {pokemon.stats[1].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span className="stat-label">Defense</span>
                <ProgressBar
                  className="progress-bar"
                  completed={pokemon.stats[2].base_stat.toString()}
                  bgColor="#4592c4"
                  baseBgColor="#4d5b64"
                  height="1.5rem"
                  borderRadius="0.5rem"
                />
                <span className="counter-stat">
                  {pokemon.stats[2].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span className="stat-label">Special Attack</span>
                <ProgressBar
                  className="progress-bar"
                  completed={pokemon.stats[3].base_stat.toString()}
                  bgColor="#f366b9"
                  baseBgColor="#4d5b64"
                  height="1.5rem"
                  borderRadius="0.5rem"
                />
                <span className="counter-stat">
                  {pokemon.stats[3].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span className="stat-label">Special Defense</span>
                <ProgressBar
                  className="progress-bar"
                  completed={pokemon.stats[4].base_stat.toString()}
                  bgColor="#83c5be"
                  baseBgColor="#4d5b64"
                  height="1.5rem"
                  borderRadius="0.5rem"
                />
                <span className="counter-stat">
                  {pokemon.stats[4].base_stat}
                </span>
              </div>
              <div className="stat-group">
                <span className="stat-label">Speed</span>
                <ProgressBar
                  className="progress-bar"
                  completed={pokemon.stats[5].base_stat.toString()}
                  bgColor="#ff7402"
                  baseBgColor="#4d5b64"
                  height="1.5rem"
                  borderRadius="0.5rem"
                />
                <span className="counter-stat">
                  {pokemon.stats[5].base_stat}
                </span>
              </div>
            </div>
          </div>
          <div className="weakness">
            <h1>Weakness</h1>
            {pokemon.types.map((type) => (
              <div key={type.type.name} className="weakness-pokemon">
                <h3>{primerMayuscula(type.type.name)} -</h3>
                <p>{getTypeInfo(type.type.name)}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
};
