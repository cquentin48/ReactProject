import React, { Component } from "react";
import PokemonTableCell from "./PokemonTableCell";

class PokemonTable extends Component {
  constructor(props) {
    super(props);
    this.state = { size: 3 };
  }

  render() {
    var rows = this.generateTable();
    return (
      <table id="PokemonListTable">
        <thead />
        <tbody>{rows}</tbody>
      </table>
    );
  }

  extractElement(beginning, ending) {
    var rowArray = [];
    for (var i = beginning; i < ending; i++) {
      rowArray.push();
    }
  }

  generateTable() {
    let rows = [];
    for (var i = 0; i < this.props.data.length; i = i + this.props.trWidth) {
      let rowID = `row${i}`;
      let cell = [];
      for (
        var j = i;
        j < i + this.props.trWidth && j < this.props.data.length;
        j++
      ) {
        cell.push(
          <PokemonTableCell
            sprite={this.props.data[j].sprite}
            text={this.props.data[j].name}
          />
        );
      }
      rows.push(
        <tr key={i} id={rowID}>
          {cell}
        </tr>
      );
    }
    return rows;
  }
}

export default PokemonTable;
