import React from "react";
import Style from "./STYLES/main.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// importation des différents components
import Inscription from "./LOGIN/Pages/inscription";
import Connexion from "./LOGIN/Pages/connexion";

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/inscription" exat component={ Inscription } />
        <Route path="/connexion" exact component={ Connexion } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
