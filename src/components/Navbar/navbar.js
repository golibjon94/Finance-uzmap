import React from "react";
import "./navbar.css";
import {DropdownButton, Dropdown} from 'react-bootstrap';
import MoliyaLogo from "../../assets/moliyaLogo.png"
export default function Navbar() {
  return (
    <div className="navbar">
<img src={MoliyaLogo} alt="moliya" />
      <DropdownButton 
      id="dropdown-basic-button"
      title="Dropdown 1">
        <Dropdown.Item href="#/action-1">
          Savol-javob
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          Asosiy tushunchalar
          </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          Aloqalar
          </Dropdown.Item>
      </DropdownButton>
      <DropdownButton 
      id="dropdown-basic-button"
      title="Dropdown 2">
        <Dropdown.Item href="#/action-1">
          Savol-javob
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          Asosiy tushunchalar
          </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          Aloqalar
          </Dropdown.Item>
      </DropdownButton>
      <DropdownButton 
      id="dropdown-basic-button"
      title="Dropdown 3">
        <Dropdown.Item href="#/action-1">
          Savol-javob
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          Asosiy tushunchalar
          </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          Aloqalar
          </Dropdown.Item>
      </DropdownButton>
      <DropdownButton 
      id="dropdown-basic-button"
      title="Dropdown 4">
        <Dropdown.Item href="#/action-1">
          Savol-javob
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          Asosiy tushunchalar
          </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          Aloqalar
          </Dropdown.Item>
      </DropdownButton>
    
     
    </div>
  );
}
