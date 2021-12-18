import React from "react";
import { useHistory } from "react-router";


const Navigation = ({ data }) => {

    const historique = useHistory();

    const handleSide = () => {
        const sidebar = document.querySelector('.sidebar_accueil');
        const content = document.querySelector('.toggleSidebar');
        const burger = document.querySelector('.burger-icon');
        
        sidebar.classList.toggle('activebar');
        burger.classList.toggle('burger-active');
        content.classList.toggle('content--active');
    } 

    const handleGoBack = () => {
        historique.push(data.goBack);
    }

    return(

        <div className="nav">

            <div className="nav__back">
                <i class="fas fa-arrow-left goback" onClick={ handleGoBack }></i>
            </div>

            <div className="nav__content">
                {data.text}
            </div>

            <div className="nav__burger" onClick={ handleSide }>
                <i class="fas fa-bars burger-icon"></i>
            </div>

        </div>
    )
}

export default Navigation;