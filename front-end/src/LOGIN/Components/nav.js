import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {

    return(
        
        <div className="nav">
            <NavLink exact to="/inscription" className="nav--inscription" activeClassName="nav-active"> Inscription </NavLink>
            <NavLink exact to="/connexion" className="nav--connexion" activeClassName="nav-active"> Connexion </NavLink>
        </div>
    )
}

export default Navigation;