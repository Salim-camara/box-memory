import React, { useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import config from "../../service/config";

import Navigation from "../Components/nav";
import Sidebar from "../Components/sidebar";
import ErrorOrientation from "../Components/errorOrientation";


const WeekList = () => {

    const historique = useHistory();
    // data pour navbar
    const data = { 
        goBack: '/accueil',
        text: 'Mes souvenirs'
    }

    const token = localStorage.getItem('token');

    useEffect(() => {

        // controle width
        if(window.innerWidth > 800) {
            historique.push('/width');
        }

        axios.get(`${config.url}/memories_weeks`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((memories) => {

                const data = memories.data.data;

                const createElement = async () => {

                    for(const semaine of data) {
    
                        const weekExist = document.getElementById(`${semaine.week}`);
                        const weeksContainer = document.querySelector('.weeks');
    
                        if (weekExist == undefined) {
    
                            const week = document.createElement('div');
                            week.id = semaine.week;
                            week.classList.add('weeksOfWeekList');
                            week.innerHTML = `
                                <span>
                                    Semaine ${semaine.week} - ${semaine.date.year} 
                                </span>
                                <span>
                                    <i class="fas fa-arrow-right"></i>
                                </span>`;
    
                            weeksContainer.appendChild(week);
                        }
                    }
                }

                createElement()
                    .then(() => {

                        const week = document.querySelectorAll('.weeksOfWeekList');

                        week.forEach((item) => {
                            
                            item.addEventListener('click', () => {

                                const weekId = item.id;
                                historique.push(`/week#${weekId}`);

                            })
                        })
                    })
                    .catch((err) => console.log(`erreur lors de l'affectation de l'url ` + err))

            })
            .catch((err) => historique.push('/error'));

    }, []);

    const handleSidebarDelete = () => {

        const sidebar = document.querySelector('.sidebar_accueil');
        sidebar.classList.remove('activebar');
    }

    return(
        <div className="weeklist">

            <ErrorOrientation />

            <Navigation data= {data}/>
            <div className="sidebar_accueil">
                <Sidebar />
            </div>

            <div className="filter">
            </div>

            <div className="weeks toggleSidebar" onClick={ handleSidebarDelete }>
            </div>


        </div>
    )
}

export default WeekList;