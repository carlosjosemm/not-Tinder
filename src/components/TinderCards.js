import { SwapHorizRounded } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import axios from '../axios';
import './TinderCards.css';


export default function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");

            setPeople(req.data);
        }

        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) => {
        //some code...
    };

    const outOfFrame = (name) => {
        //some more code...
    };

    return (
        <div className="tindercards">
            <div className="tindercards__cardContainer">
                {people.map(person =>
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}    
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                            <div 
                                className="card"
                                style={{backgroundImage: `url(${person.imgUrl})`}}>

                                <h3>{person.name}</h3>
                                
                            </div>   
                    </TinderCard>
                )}
            </div>
        </div>
    )
}
