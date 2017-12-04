import React from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router';
import '../App.css';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

const Header = ({Login}) => {
    /*if(!Login) {
        return <div>Not Logged in</div>;
    }*/

    return (
        <AppBar
        title="FCC Voting App"
        iconClassNameRight="muidocs-icon-navigation-expand-more" 
        
        />
        
    )
}

export default Header;