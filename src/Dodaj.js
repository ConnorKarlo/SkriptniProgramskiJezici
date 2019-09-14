import React, { Component } from "react";
import { dodajApi } from "./api";

export default class Dodaj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marka: "",
      model: "",
      cijena: ""
    };
  }

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  async dodaj() {
    const auto = {
      marka: this.state.marka,
      model: this.state.model,
      cijena: this.state.cijena,
      prodano: 0
    };

    await dodajApi(auto);
  }

  render() {
    return (
      <div>
        <p>
          Marka:
          <input
            type="text"
            name="marka"
            value={this.state.value}
            onChange={this.handleChange("marka")}
          />
        </p>
        <p>
          Model:
          <input
            type="text"
            name="model"
            value={this.state.value}
            onChange={this.handleChange("model")}
          />
        </p>
        <p>
          Cijena:
          <input
            type="text"
            name="cijena"
            value={this.state.value}
            onChange={this.handleChange("cijena")}
          />
        </p>
        <p>
          <button onClick={() => this.dodaj()}>Dodaj u ponudu</button>
        </p>
      </div>
    );
  }
}
