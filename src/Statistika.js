import React, { Component } from "react";
import { listaApi } from "./api";

export default class Statistika extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ponuda: []
    };
  }

  async componentDidMount() {
    let auti = await listaApi();
    this.setState({ ponuda: auti });
  }

  ukupno() {
    var total = 0;
    for (var i = 0; i < this.state.ponuda.length; i++) {
      total =
        total + this.state.ponuda[i].cijena * this.state.ponuda[i].prodano;
    }
    return total;
  }

  render() {
    return (
      <table style={{ width: "100%" }}>
        <th>Marka</th>
        <th>Model</th>
        <th>Prodano</th>
        <th>Zarada</th>
        <tbody>
          {this.state.ponuda.map((row, i) => (
            <tr key={i}>
              <td>{row.marka}</td>
              <td>{row.model}</td>
              <td>{row.prodano}</td>
              <td>{row.prodano * row.cijena}</td>
            </tr>
          ))}
        </tbody>
        <h2>Ukupna zarada: {this.ukupno()}</h2>
      </table>
    );
  }
}
