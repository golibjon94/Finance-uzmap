import React, { Component } from 'react'
import "./header.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="left">
                <MenuIcon 
                style={{fontSize:"40px",cursor:"pointer"}}/>
                <div className="search">
                <input/>
                <SearchIcon style={{cursor:"pointer"}}/>
                </div>
                </div>
                <div style={{textAlign:"center",alignItems:"center"}}>
                <select>
                    <option>UZB</option>
                    <option>RUS</option>
                    <option>ENG</option>
                </select>
                <AccountCircleIcon
                style={{fontSize:"40px",cursor:"pointer"}}/>
                </div>
            </div>
        )
    }
}
