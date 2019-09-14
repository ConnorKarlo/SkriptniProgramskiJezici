import React, { Component } from "react";
import { urediApi, listaApi } from "./api";

export default class Uredi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ponuda: [],
      marka: "",
      model: "",
      cijena: ""
    };
  }

  async componentDidMount() {
    let auti = await listaApi();
    this.setState({ ponuda: auti });

    var currentLocation = this.props.location.pathname.split("/")[2];
    console.log(auti);
    console.log(currentLocation);
    var auto = auti.find(element => {
      return element.id == currentLocation;
    });

    console.log(auto);

    this.setState({
      marka: auto.marka,
      model: auto.model,
      cijena: auto.cijena
    });
  }
  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  async uredi() {
    var auto = this.state.ponuda.find(element => {
      return element.id == this.props.match.params.id;
    });
    auto.marka = this.state.marka;
    auto.model = this.state.model;
    auto.cijena = this.state.cijena;

    await urediApi(auto.id, auto);
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        <p>
          Marka:
          <input
            type="text"
            name="marka"
            value={this.state.marka}
            onChange={this.handleChange("marka")}
          />
        </p>
        <p>
          Model:
          <input
            type="text"
            name="model"
            value={this.state.model}
            onChange={this.handleChange("model")}
          />
        </p>
        <p>
          Cijena:
          <input
            type="text"
            name="cijena"
            value={this.state.cijena}
            onChange={this.handleChange("cijena")}
          />
        </p>
        <p>
          <button onClick={() => this.uredi()}>Uredi auto</button>
        </p>
      </div>
    );
  }
}
