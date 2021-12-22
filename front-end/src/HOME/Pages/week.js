import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/card";
import Navigation from "../Components/nav";
import Sidebar from "../Components/sidebar";
import config from "../../service/config";
import { useHistory } from "react-router";
import ErrorOrientation from "../Components/errorOrientation";



const Week = () => {

    const [allCard, setAllCard] = useState(null);
    const [weekNum, setWeekNum] = useState(null);

    const historique = useHistory();
    const token = localStorage.getItem('token');

    // data pour navbar
    const data = {
        goBack: '/weeks',
        text: `Résumé de la semaine`
    }

    useEffect(() => {

        // controle width
        if(window.innerWidth > 800) {
            historique.push('/width');
        }

        const urlWeekNum = document.location.hash.slice(1);
        setWeekNum(urlWeekNum);

        axios.post(`${config.url}/memories_week`, {weekNum: urlWeekNum}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((data) => {

                const item = data.data.data
        
                setAllCard(item.map((info) => (
                    <Card info={ info }/>
                )))

            })
            .catch((err) => historique.push('/error'))


    }, []);

    
    return(
        <div className="week">

            <ErrorOrientation />

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