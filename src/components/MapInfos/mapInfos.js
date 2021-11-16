import React from "react";
import "./mapInfos.css";

export default function MapInfos() {
  return (
    <div className="mapInfos">
      <div className="top">
        <div className="daromad">
          <p
            style={{
              lineHeight: "15px",
              color: "blue",
              fontSize: "30px",
              paddingLeft:"0"
            }}
          >
            Daromad
          </p>
          <p
            style={{
              lineHeight: "20px",
              color: "orange",
              fontSize: "30px",
              fontWeight: "bolder",
            }}
          >
            30000
          </p>
          <span style={{paddingLeft:"30px"}}>mlrd. sum</span>
        </div>
        <div className="xarajat">
          <p style={{ lineHeight: "15px", color: "blue", fontSize: "30px" }}>
            Xarajat
          </p>
          <p
            style={{
              lineHeight: "20px",
              color: "orange",
              fontSize: "30px",
              fontWeight: "bolder",
            }}
          >
            30000
          </p>
          <span style={{paddingLeft:"15px"}}>mlrd. sum</span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Aholi soni</th>
            <th>Arizalar soni</th>
            <th>Rad etilganlari</th>
            <th>Hal etilganlari</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>100000</td>
            <td>1000</td>
            <td>200</td>
            <td>800</td>

          </tr>
          <tr>
            <td>100000</td>
            <td>1000</td>
            <td>200</td>
            <td>800</td>

          </tr>
          <tr>
            <td>100000</td>
            <td>1000</td>
            <td>200</td>
            <td>800</td>

          </tr>
          <tr>
            <td>100000</td>
            <td>1000</td>
            <td>200</td>
            <td>800</td>

          </tr>

        </tbody>
      </table>
    </div>
  );
}
