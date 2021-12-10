import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../styles/Card";
import { Grid } from "../../styles/Grid";
import { PokemonContainer, Name, Types } from "./Pokemon.styles";

const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);

  const getPokemonList = async () => {
    const maxPokemon = 151;
    let pokemonArray = [];

    for (let i = 1; i <= maxPokemon; i++) {
      pokemonArray.push(await fetchPokemon(i));
    }

    setPokemon(pokemonArray);
    console.log(pokemon);
  };

  const fetchPokemon = async (i) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);

    return data;
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <PokemonContainer>
      <Grid>
        {pokemon.map((p) => (
          <Card key={p.id}>
            <img src={p.sprites.front_default} alt={p.name} />
            <Name>{p.name}</Name>

            <Types>
              {p.types.map(({ type }) => (
                <li key={type.name}>{type.name}</li>
              ))}
            </Types>
          </Card>
        ))}
      </Grid>
    </PokemonContainer>
  );
};

export default Pokemons;
