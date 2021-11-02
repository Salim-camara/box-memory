import React from "react";
import Style from "./STYLES/main.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// importation des différents components
import Inscription from "./LOGIN/Pages/inscription";

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/inscription" exat component={ Inscription } />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
