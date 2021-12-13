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

    useEffect(() => {

        const urlWeekNum = document.location.hash[1];
        setWeekNum(urlWeekNum);

        axios.post(`${config.url}/memories_week`, {weekNum: 52}, axiosHeaders.headers)
            .then((data) => {

                console.log(data);


                // test
                // axios.get(`${config.url}/memories_week`)
                //     .then((data) => {
        
                //         const item = data.data.data
        
                //         setAllCard(item.map((info) => (
                //             <Card info= { info }/>
                //         )))
        
                //     })
                //     .catch((err) => console.log('erreur récupération axios ' + err));

            })
            .catch((err) => { console.log('error ' + err)})


    }, []);

    
    return(
        <div className="week">

            <Navigation />
            <div className="sidebar_accueil">
                <Sidebar />
            </div>

            <div className="numberweek">
                <h1>Semaine {weekNum}</h1>
            </div>

            <div className="cards">
                {allCard}
            </div>

        </div>
    )
}

export default Week;