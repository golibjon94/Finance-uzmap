import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from "./components/Map"
import RegionsData from "./components/RegionsData"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Chart from "./components/chart";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Header/>
        <div className="dashboard">
      <Router >  
<Switch>
  <Route  exact path="/Finance-uzmap" >
  <Map/>
  </Route>
  <Route  exact path="/regionData/:id" >
<RegionsData/>

<Chart/>
  </Route>
  
</Switch>
</Router>

</div>
</div>
    </div>
  );
}

export default App;
