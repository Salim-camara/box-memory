import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {

    return(
        
        <div className="nav">
            <NavLink exact to="/inscription" className="nav--insc" activeClassName="nav-active"> Inscription </NavLink>
            <NavLink exact to="/connexion" className="nav--conn" activeClassName="nav-active"> Connexion </NavLink>
        </div>
    )
}

export default Navigation;