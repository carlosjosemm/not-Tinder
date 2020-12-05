import { SwapHorizRounded } from '@material-ui/icons';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

export default function TinderCards() {
    const [people, setPeople] = useState([
        { 
            name: 'elon musk',
            url: "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
        },
        {
            name: "brad pitt",
            url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg",
        }, 

    ]);

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
                                style={{backgroundImage: `url(${person.url})`}}>

                                <h3>{person.name}</h3>
                                
                            </div>   
                    </TinderCard>
                )}
            </div>
        </div>
    )
}
