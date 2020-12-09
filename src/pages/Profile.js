import React, { useEffect } from 'react'
import Header from '../components/Header';
import { actionTypes } from '../reducer';
import { useDataLayer } from '../StateProvider';
import { Avatar } from "@material-ui/core";
import './Profile.css';


export default function Profile() {

    const [{path, user}, dispatch] = useDataLayer();

    useEffect(() => {
        dispatch({
            type: actionTypes.SET_PATH,
            path: window.location.pathname,
        });
    }, [])

    return (
        <div className="profile" >
            <Header />
                <div className="profile__body">
                    {console.log(`current path is ${path} desde return`)}
                    <Avatar src={user.photoURL} className="profile__avatar" />
                </div>
        </div>
    )
}
