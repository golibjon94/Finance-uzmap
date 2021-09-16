import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from "./components/Map"
import RegionsData from "./components/RegionsData"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>  
<Switch>
  <Route  exact path="/" >
  <Map/>
  </Route>
  <Route  exact path="/regionsData/:id" >
<RegionsData/>
  </Route>
  
</Switch>
</Router>
    
    </div>
  );
}

export default App;
