import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/banner";
import Navbar from "./components/Navbar/navbar";
import Infos from "./components/Infos/infos";
import Footer from "./components/Footer/footer";
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
        <Navbar/>
        <Banner/>
         <Infos/>
         <Footer/>
    </div>
    </Router>
  );
}

export default App;
