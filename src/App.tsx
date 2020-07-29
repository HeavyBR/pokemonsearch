import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "./store";
import {GetPokemon} from "./actions/PokemonActions";

function App() {

  const dispatch = useDispatch();
  const [pokemonName, setPokenonName] = useState("");
  const pokemonState  = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setPokenonName(e.target.value);
  const handleSubmit = () => dispatch(GetPokemon(pokemonName));

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
      {pokemonState.pokemon && (
          <div>
            <img src={pokemonState.pokemon.sprites.front_default} alt=""/>
            {pokemonState.pokemon.abilities.map(ability => {
              return <p>{ability.ability.name}</p>
            })}
          </div>
      )}
    </div>
  );
}

export default App;
