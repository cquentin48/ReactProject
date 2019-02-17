import React, { Component } from "react";

class LoadingPokemon extends Component {
  isPokemonLoadedCountPlural() {
    if (this.props.pokemonLoaded <= 1) {
      return (
        <p>
          {this.props.pokemonLoaded} pokémon sur {this.props.pokemonTotalCount}{" "}
          chargé
        </p>
      );
    } else {
      return (
        <p>
          {this.props.pokemonLoaded} pokémons sur {this.props.pokemonTotalCount}{" "}
          chargés
        </p>
      );
    }
  }
  render() {
    return (
      <div id="LoadingPokemons">
        <h1>Projet Réact - Quentin CHAPEL et Noé Colin</h1>
        <img src="https://i.redd.it/fcys3yr59dax.gif" alt="Loading Pokemons" />
        <h1>Chargement en cours</h1>
        {this.isPokemonLoadedCountPlural()}
      </div>
    );
  }
}
export default LoadingPokemon;
