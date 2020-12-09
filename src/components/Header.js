import React, { useEffect } from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import { Link, useHistory } from 'react-router-dom';
import { useDataLayer } from '../StateProvider';
import { actionTypes } from '../reducer';

export default function Header() {
    const [{path}, dispatch] = useDataLayer();

    //console.log(`current path is ${path} from inside HEADER`);

    return (
        <div className="header">
                
                {(path=="/profile") ? (
                    <IconButton>
                        <Link to="/profile" className="header__iconActive">
                            <PersonIcon fontSize="large" className="header__icon" />
                        </Link>
                    </IconButton>
                ) : (
                    <IconButton>
                        <Link to="/profile">
                            <PersonIcon fontSize="large" className="header__icon" />
                        </Link>
                    </IconButton>
                )}

                {(path=="/") ? (
                    <IconButton className="header__buttonHome">
                        <Link to="/" className="header__iconActive">
                            <img 
                                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
                                alt="tinder-logo" 
                                className="header__logo"
                            />
                        </Link>
                    </IconButton>
                ) : (
                    <IconButton className="header__buttonHome">
                        <Link to="/">
                            <img 
                                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
                                alt="tinder-logo" 
                                className="header__logo"
                            />
                        </Link>
                    </IconButton>
                )}

                {(path=="/chats") ? (
                    <IconButton>
                        <Link to="/chats" className="header__iconActive">
                            <ForumIcon fontSize="large" className="header__icon" />            
                        </Link>
                </IconButton>
                ) : (
                    <IconButton>
                        <Link to="/chats">
                            <ForumIcon fontSize="large" className="header__icon" />            
                        </Link>
                </IconButton>
                )}


                
                {/*<IconButton>
                    <Link to="/profile">
                    <PersonIcon fontSize="large" className="header__icon" />
                    </Link>
                </IconButton>

                <IconButton className="header__buttonHome">
                    <Link to="/">
                    <img 
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
                    alt="tinder-logo" 
                    className="header__logo"
                    />
                    </Link>
                </IconButton>
 
                <IconButton>
                    <Link to="/chats">
                    <ForumIcon fontSize="large" className="header__icon" />            
                    </Link>
                </IconButton>*/}
        </div>
    )
}
