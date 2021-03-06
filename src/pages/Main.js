import React, { useEffect } from 'react'
import Header from '../components/Header';
import SwipeButtons from '../components/SwipeButtons';
import TinderCards from '../components/TinderCards';
import { actionTypes } from '../reducer';
import { useDataLayer } from '../StateProvider';
import "./Main.css";

export default function Main() {

    const [{path}, dispatch] = useDataLayer();

    useEffect(() => {
        console.log(window.location.pathname);
        dispatch({
            type: actionTypes.SET_PATH,
            path: window.location.pathname,
        });
    }, [])

    console.log(`current path is ${path}`);

    return (
        <div className="main">
            <Header />

            <TinderCards  />

            <SwipeButtons />
            
        </div>
    )
}
