import React from 'react';
import "./infos.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MapInfos from '../MapInfos/mapInfos';
import Map from "../Map/Map";
import RegionsData from "../RegionsData/RegionsData";
import Chart from "../../charts/apexChart";

export default function Infos() {
    return (
        <div className="infos">
             <Router>
               <div className="map_chart">
            <Switch>
              <Route exact path="/Finance-uzmap">
                <Map/>
              </Route>
              <Route exact path="/regionData/:id">
                <RegionsData />
              </Route>
              </Switch>
                <MapInfos />
                </div>
                <div className="homepage_charts">
                <Chart />
                </div>
          </Router>
        </div>
    )
}
