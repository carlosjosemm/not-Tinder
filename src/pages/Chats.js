import React, { useEffect } from 'react'
import Header from '../components/Header'
import { actionTypes } from '../reducer';
import { useDataLayer } from '../StateProvider';

export default function Chats() {

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
        <div>
          <Header />  
          <h1>CHATS</h1>
        </div>
    )
}
