import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import {auth, provider} from "../firebase";
import {actionTypes} from "../reducer";
import { useDataLayer } from '../StateProvider';

function Login() {
    const [{user}, dispatch] = useDataLayer();

    const signIn = () => {
        //Some sign in code...
        auth.signInWithPopup(provider).then(
            (result) => {
                console.log(result.user);
                dispatch(
                    {type: actionTypes.SET_USER, user: result.user}
                );
            }
        ).catch(error => alert(error.message));
        
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://i.imgur.com/ojO5u0X.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                <img className="googleicon" src="https://i.imgur.com/sO3iEQz.png" alt="google icon" />
                Sign In with Google
            </Button>
        </div>
    );
}

export default Login
