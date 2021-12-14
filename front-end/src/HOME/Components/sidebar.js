import React from "react";
import { NavLink } from 'react-router-dom';



const Sidebar = () => {

    return(
        <div className="sidebar">

            <div className="sidebar--logo">
                Boîte à souvenir
            </div>

            <NavLink exact to="/accueil" className="sidebar--link" activeClassname="test">
                Aujourd'hui 
            </NavLink>
            <NavLink exact to="/weeks" className="sidebar--link" activeClassname="test">
                Mes souvenirs
            </NavLink>
            <span className="sidebar--link">Rappels (en dev.)</span>
            <span className="sidebar--link">Paramètres (en dev.)</span>
            <span className="sidebar--link deconnec">Déconnexion</span>
        </div>
    )
}

export default Sidebar;