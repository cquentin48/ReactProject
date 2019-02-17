import React, { Component } from "react";

class PokemonListInformations extends React.Component {
  render() {
    return (
      <div id="PokemonListInformations">
        <h1>Pokédex national</h1>
        <p>Actuellement il existe {this.props.count} pokémons répertoriés</p>
      </div>
    );
  }
}

export default PokemonListInformations;
