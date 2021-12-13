import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../Components/nav";
import config from "../../service/config";
import { useHistory } from "react-router";



const WeekList = () => {

    const historique = useHistory();

    useEffect(() => {

        axios.get(`${config.url}/memories`)
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
            .catch((err) => console.log('erreur récupération souvenirs ' + err));

    }, []);

    return(
        <div className="weeklist">

            <Navigation />

            <div className="filter">
            </div>

            <div className="weeks">
            </div>


        </div>
    )
}

export default WeekList;