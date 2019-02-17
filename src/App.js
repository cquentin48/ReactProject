import React, { Component } from "react";
import PokemonTable from "./PokemonTable";
import PokemonListInformations from "./PokemonListInformations";
import PokemonResearchOptions from "./PokemonResearchOptions";
import LoadingPokemon from "./LoadingPokemon";

const PokemonSpriteURL = "https://pokeapi.co/api/v2/pokemon/";
const PokemonSpeciesURL = "https://pokeapi.co/api/v2/pokemon-species/";
const pokemonCount = 806;
const trWidth = 10;
class App extends Component {
  fetchData = URL => {
    return fetch(URL)
      .then(response => response.json())
      .then(data => {
        return data.names[6].name;
      });
  };
  fetchPokemonSpriteData = URL => {
    return fetch(URL)
      .then(response => response.json())
      .then(data => {
        return data.sprites.front_default;
      });
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      backupData: [],
      pokemonSelected: 0,
      pokemonLoadCount: 0,
      isLoaded: false
    };
  }
  componentDidMount() {
    this.loadPokemonCount();
  }

  loadPokemonData(pokemonSize) {
    const requests = [];
    for (let i = 0; i <= pokemonCount; i++) {
      requests.push(this.fetchData(`${PokemonSpeciesURL}${i + 1}/`));
      requests.push(
        this.fetchPokemonSpriteData(`${PokemonSpriteURL}${i + 1}/`)
      );
    }
    Promise.all(requests).then(data => {
      var returnedArray = [];
      for (var i = 0; i < data.length; i = i + 2) {
        var array = {};
        array["name"] = data[i];
        array["sprite"] = data[i + 1];
        this.setState({
          pokemonLoadCount: i / 2
        });
        returnedArray.push(array);
      }
      this.setState({
        data: returnedArray,
        backupData: returnedArray,
        isLoaded: true
      });
    });
  }

  handleResearchListEvent = input => {
    if (input === "") {
      this.setState({
        data: this.state.backupData
      });
    } else {
      var filteredData = this.state.data.filter(function(pokemonElement) {
        return pokemonElement.name.toLowerCase().includes(input.toLowerCase());
      });
      this.setState({
        data: filteredData
      });
    }
  };

  loadPokemonCount() {
    var jsonPath = "https://pokeapi.co/api/v2/pokemon";
    fetch(jsonPath)
      .then(response => response.json())
      .then(response => this.loadPokemonData(response.count));
  }

  render() {
    if (this.state.isLoaded === false) {
      return (
        <LoadingPokemon
          pokemonLoaded={this.state.pokemonLoadCount}
          pokemonTotalCount={pokemonCount}
        />
      );
    } else if (this.state.pokemonSelected === 0) {
      return (
        <div id="PokemonWebsite">
          <PokemonResearchOptions
            researchListEvent={this.handleResearchListEvent}
          />
          <div id="PokedexList">
            <PokemonListInformations count={this.state.data.length} />
            <h2>Tableau des pokémons</h2>
            <PokemonTable data={this.state.data} trWidth={trWidth} />
          </div>
        </div>
      );
    } else {
      return <p />;
    }
  }
}

export default App;
