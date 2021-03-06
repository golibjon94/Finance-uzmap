import React, { Component } from "react";
import "./header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Arizalar from "../Ariza/ariza";
export default function Header() {

  return (
    <div className="header">
      <div className="left">
        <p>USD 10737.06</p>
        <p>EUR 12286.42</p>
        <p>RUB 148.98</p>
      </div>
      <div className="right">
        <select>
          <option>UZB</option>
          <option>RUS</option>
          <option>ENG</option>
        </select>
        {/* <Link style={{textDecoration:"none"}} to="/"><span>Shikoyatlar</span></Link> */}
          <Arizalar/>
        <form>
          <input type="text" placeholder="qidirish"/>
            <SearchIcon style={{marginTop:"4px",cursor:"pointer"}}/>
        </form>
      </div>
    </div>
  );
}
