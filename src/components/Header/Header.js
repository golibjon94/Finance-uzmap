import React, { Component } from "react";
import "./header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div className="header">
      <div className="left">
        <p>USD 10600</p>
        <p>USD 10600</p>
        <p>USD 10600</p>
      </div>
      <div className="right">
        <select>
          <option>UZB</option>
          <option>RUS</option>
          <option>ENG</option>
        </select>
        <Link style={{textDecoration:"none"}} to="/"><span>Shikoyatlar</span></Link>
        <form>
          <input type="text" placeholder="qidirish"/>
            <SearchIcon style={{marginTop:"4px",cursor:"pointer"}}/>
        </form>
      </div>
    </div>
  );
}
