import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {

    return(
        
        <div className="nav__login">
            <NavLink exact to="/inscription" className="nav__login--insc" activeClassName="nav-active__login"> Inscription </NavLink>
            <NavLink exact to="/connexion" className="nav__login--conn" activeClassName="nav-active__login"> Connexion </NavLink>
        </div>
    )
}

export default Navigation;