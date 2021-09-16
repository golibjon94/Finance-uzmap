import React, { useState } from "react";
import "./map.css";
import Popup from "./popup";
import { uzbDatas } from "../uzbDatas";
import { useHistory } from "react-router-dom";


function Map() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const history = useHistory();
  const togglePopup = (id, name) => {
    setId(id);
    setName(name);
    setIsOpen(true);
  };
  const doubleClick = (id) => {
    history.push(`/regionsData/${id}`);
  };
  return (
    <div className="regions">
      {isOpen && (
        <Popup
          content={
            <>
              <p
                style={{
                  fontSize: "15px",
                  color: "orange",
                  fontWeight: "bold",
                }}
              >
                id:{id},
                <br />
                name:{name}
              </p>
            </>
          }
          handleClose={togglePopup}
        />
      )}
      <svg
        id="uzbekistan"
        baseprofile="tiny"
        height="652"
        stroke="#ffffff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        version="1.2"
        viewbox="0 0 1000 652"
        width="1000"
        onMouseOut={() => setIsOpen(false)}
      >
        {uzbDatas.map((item) => (
          <svg
            onDoubleClick={(id) => {
              doubleClick(item.id);
            }}
            onClick={(id, name) => {
              togglePopup(item.id, item.name);
            }}
          >
            <path name={item.name} id={item.id} d={item.d} />
          </svg>
        ))}

        <circle cx="673.4" cy="626" id="0"></circle>
        <circle cx="637.6" cy="506" id="1"></circle>
        <circle cx="636" cy="498.9" id="2"></circle>
      </svg>

    </div>
  );
}

export default Map;
