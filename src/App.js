import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Component
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Homepage from "./components/Homepage";

class App extends Component {
  render(){
   return (
     <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Widget App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li>
                  <Link to="/signUp" className="nav-link">Sign Up</Link>
                </li>
                <li>
                  <Link to="/" className="nav-link">Log In</Link>
                </li>
                {/* <li>
                  <Link to="/c" className="nav-link">Add Campus</Link>
                </li> */}
              </ul>
            </div>
          </nav>
          <Route exact path ="/" component={LogIn}/>
          <Route exact path ="/signUp" component={SignUp}/>
          <Route exact path ="/homepage" component={Homepage}/>
          {/*Route exact path ="/campuses/:id" component={CampusCard}/>
          <Route exact path ="/students/:id" component={StudentCard}/> */}
        </div>
        </Router>
    )
  }
}

export default App;
