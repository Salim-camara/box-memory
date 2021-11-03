import React from "react";
import Style from "./STYLES/main.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// importation des différents components
import Inscription from "./LOGIN/Pages/inscription";
import Connexion from "./LOGIN/Pages/connexion";
import Accueil from "./HOME/Pages/accueil";

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/inscription" exat component={ Inscription } />
        <Route path="/connexion" exact component={ Connexion } />
        <Route path="/accueil" exact component={ Accueil } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
