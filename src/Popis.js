import React, { Component } from "react";
import { listaApi, izbrisiApi, urediApi } from "./api";

export default class Popis extends Component {
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

  async prodaj(auto) {
    var prodaniAuto = auto;
    prodaniAuto.prodano += 1;
    await urediApi(auto.id, prodaniAuto);
    alert(
      "Još jedan " + prodaniAuto.marka + " " + prodaniAuto.model + " je prodan!"
    );
  }

  async izbrisi(auto) {
    this.setState({
      ponuda: this.state.ponuda.filter(function(a) {
        return a.id !== auto.id;
      })
    });
    await izbrisiApi(auto.id);
    alert("Auto " + auto.marka + " " + auto.model + " je izbrisan!");
  }

  uredi(auto) {
    window.location.href = `/uredi/${auto.id}`;
  }

  render() {
    return (
      <table style={{ width: "100%" }}>
        <th>Marka</th>
        <th>Model</th>
        <th>Cijena</th>
        <tbody>
          {this.state.ponuda.map((row, i) => (
            <tr key={i}>
              <td>{row.marka}</td>
              <td>{row.model}</td>
              <td>{row.cijena}</td>
              <td>
                <button onClick={() => this.prodaj(row)}>Prodaj</button>
                <button onClick={() => this.uredi(row)}>Uredi</button>
                <button onClick={() => this.izbrisi(row)}>Izbriši</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
