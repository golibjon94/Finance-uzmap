import React, { Component } from 'react'
import "./sidebar.css";
// import HomeIcon from '@mui/icons-material/Home';
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import InstagramIcon from '@material-ui/icons/Instagram';  
import YouTubeIcon from '@material-ui/icons/YouTube';  
import HomeIcon from '@material-ui/icons/Home';  
import Logo from "../assets/moliya2.jfif"

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <img src={Logo}/>
                <div className="icons">
                <HomeIcon style={{fontSize:"40px",margin:"10px",cursor:"pointer"}}/>
                <InstagramIcon style={{fontSize:"40px",margin:"10px",cursor:"pointer"}}/>
                <YouTubeIcon style={{fontSize:"40px",margin:"10px",cursor:"pointer"}}/>
                </div>
            </div>
        )
    }
}
