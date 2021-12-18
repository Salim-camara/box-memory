import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/card";
import Navigation from "../Components/nav";
import Sidebar from "../Components/sidebar";
import config from "../../service/config";
import axiosHeaders from "../../service/axiosHeaders";



const Week = () => {

    const [allCard, setAllCard] = useState(null);
    const [weekNum, setWeekNum] = useState(null);
    const token = localStorage.getItem('token');
    // data pour navbar
    const data = {
        goBack: '/weeks',
        text: `Résumé de la semaine`
    }

    useEffect(() => {

        const urlWeekNum = document.location.hash.slice(1);
        setWeekNum(urlWeekNum);

        axios.post(`${config.url}/memories_week`, {weekNum: urlWeekNum}, axiosHeaders.headers)
            .then((data) => {

                const item = data.data.data
        
                setAllCard(item.map((info) => (
                    <Card info={ info }/>
                )))

            })
            .catch((err) => { console.log('error ' + err)})


    }, []);

    
    return(
        <div className="week">

            <Navigation data={ data }/>
            <div className="sidebar_accueil">
                <Sidebar />
            </div>

            <div className="numberweek">
                <h1>Semaine {weekNum}</h1>
            </div>

            <div className="cards toggleSidebar">
                {allCard}
            </div>

        </div>
    )
}

export default Week;