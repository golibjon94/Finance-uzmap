import React from 'react'
import "./banner.css";

export default function Banner() {
    return (
        <div className="banner">
            <h1>Davlat byudjetining parametrlari</h1>
        <div className="finInfos">
         <div className="daromad">
             <p className="infos_name">Daromad </p>
             <p style={{fontFamily:"sans-serif",color:"green",fontSize:"27px"}}>147 202.0</p>
             <p style={{lineHeight:"10px",fontSize:"20px"}}>Mlrd.sum</p>
             </div>
         <div className="defitsit">
             <p className="infos_name">Defitsit </p>
             <p style={{fontFamily:"sans-serif",color:"red",fontSize:"27px"}}>147 202.0</p>
             <p style={{lineHeight:"10px",fontSize:"20px"}}>Mlrd.sum</p>
             </div>
         <div className="xarajatlar">
             <p className="infos_name">Xarajatlar </p>
             <p style={{fontFamily:"sans-serif",color:"yellowgreen",fontSize:"27px"}}>147 202.0</p>
             <p style={{lineHeight:"10px",fontSize:"20px"}}>Mlrd.sum</p>
             </div>
         
        </div>
        </div>
    )
}
