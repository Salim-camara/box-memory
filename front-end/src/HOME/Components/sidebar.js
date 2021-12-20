import React from "react";
import { useHistory } from "react-router";
import { NavLink } from 'react-router-dom';



const Sidebar = () => {

    const historique = useHistory();

    const handleConnect = () => {

        localStorage.clear();
        historique.push('/connexion');
    }

    return(
        <div className="sidebar">

            <div className="sidebar--logo">
                Boîte à souvenir
            </div>

            <NavLink exact to="/accueil" className="sidebar--link" activeClassname="test" activeClassName="nav-active__login">
                Aujourd'hui 
            </NavLink>
            <NavLink exact to="/weeks" className="sidebar--link" activeClassname="test" activeClassName="nav-active__login">
                Mes souvenirs
            </NavLink>
            <span className="sidebar--link">Rappels (en dev.)</span>
            <span className="sidebar--link">Paramètres (en dev.)</span>
            <NavLink exact to="/connexion" className="deconnec" onClick={ handleConnect }>
                Déconnexion
            </NavLink>

            {/* le premier 0 par la gauche correspondant à de mise à jour de fonctionnalité, l'autre à des correctifs de ces derniers ou de sécurité, le 1 correspondant à des refonte complète */}
            <div className="version"> Version 1.0.0 </div>

        </div>
    )
}

export default Sidebar;