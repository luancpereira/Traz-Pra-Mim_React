import "../App.css";
import Login from "./pages/Login";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from '../components/pages/Home'
import Travels from '../components/pages/Travels'
import FindTravel from '../components/pages/FindTravel'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function Rotas() {
  return (
    <div>
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/travels" component={Travels} />
            <Route exact path="/findtravel" component={FindTravel} />
          </Switch>
          <Footer />
        </Router>
      </>
    </div>
  );
}

export default Rotas;