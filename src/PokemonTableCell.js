import React, { Component } from "react";
class PokemonTableCell extends Component {
  render() {
    return (
      <td height="128" align="center" bgcolor="#FFFFFF">
        <img src={this.getImage()} />
        <p class id="name">
          {this.props.text}
        </p>
      </td>
    );
  }

  getImage() {
    let noPokeballIcon =
      "https://www.pokepedia.fr/images/b/b5/Tapis_Pok%C3%A9_Ball_-_ACPC.png";
    if (this.props.sprite === "" || this.props.sprite === null) {
      return noPokeballIcon;
    } else {
      return this.props.sprite;
    }
  }
}

export default PokemonTableCell;
