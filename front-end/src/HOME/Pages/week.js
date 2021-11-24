import React from "react";
import Card from "../Components/card";



const Week = () => {
    
    const data = 'test';

    return(
        <div className="week">

            <div className="numberweek"></div>

            <div className="cards">
                <Card data= { data } />
            </div>

        </div>
    )
}

export default Week;