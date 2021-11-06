import React from "react";
import Logo from "../../LOGIN/Components/logo";



const Sidebar = () => {

    return(
        <div className="sidebar">

            <div className="sidebar--logo">
                Boîte à souvenir
            </div>

            <span className="sidebar--link">Aujourd'hui</span>
            <span className="sidebar--link">Mes souvenirs</span>
            <span className="sidebar--link">Rappels</span>
            <span className="sidebar--link">Paramètres</span>
            <span className="sidebar--link deconnec">Déconnexion</span>
        </div>
    )
}

export default Sidebar;