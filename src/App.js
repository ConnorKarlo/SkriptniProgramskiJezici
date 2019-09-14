import React from "react";
import "./App.css";
import Dodaj from "./Dodaj.js";
import Popis from "./Popis";
import Statistika from "./Statistika";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Uredi from "./Uredi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <ul id="nav">
              <li>
                <a href="/">Popis automobila</a>
              </li>
              <li>
                <a href="/dodaj">Dodaj u ponudu</a>
              </li>
              <li>
                <a href="/statistika">Statistika</a>
              </li>
            </ul>
            <Switch>
              <Route path="/" exact component={Popis} />
              <Route path="/dodaj" exact component={Dodaj} />
              <Route path="/statistika" exact component={Statistika} />
              <Route path="/uredi/:id" exact component={Uredi} />
            </Switch>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
