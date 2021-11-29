import React from "react";
import "./STYLES/main.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// importation des différents components
import Inscription from "./LOGIN/Pages/inscription";
import Connexion from "./LOGIN/Pages/connexion";
import Accueil from "./HOME/Pages/accueil";
import Sidebar from "./HOME/Components/sidebar";
import Tags from "./HOME/Components/tags";
import Week from "./HOME/Pages/week";
import WeekList from "./HOME/Pages/weekList";

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/inscription" exat component={ Inscription } />
        <Route path="/connexion" exact component={ Connexion } />
        <Route path="/accueil" exact component={ Accueil } />
        <Route path="/sidebar" exact component={ Sidebar } />
        <Route path="/tag" exact component={ Tags } />
        <Route path="/week" exact component={ Week } />
        <Route path="/weeks" exact component={ WeekList } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
