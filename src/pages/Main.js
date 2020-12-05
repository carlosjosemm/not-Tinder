import React from 'react'
import SwipeButtons from '../components/SwipeButtons';
import TinderCards from '../components/TinderCards';
import "./Main.css";

export default function Main() {
    return (
        <div className="main">

            <TinderCards  />

            <SwipeButtons />
            
        </div>
    )
}
