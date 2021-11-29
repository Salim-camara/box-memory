import React from "react";
import Card from "../Components/card";
import Navigation from "../Components/nav";
import Sidebar from "../Components/sidebar";



const Week = () => {
    

    const donnee = {
        bonjour: 'nooo',
        // test: handleSide()
    }

    const click = () => {
        console.log('test');
    }

    
    return(
        <div className="week">

            <Navigation donnee={donnee}/>
            <div className="sidebar_accueil">
                <Sidebar />
            </div>

            <div className="numberweek">
                <h1>Semaine 47</h1>
            </div>

            <div className="cards">
                <Card />
            </div>

        </div>
    )
}

export default Week;