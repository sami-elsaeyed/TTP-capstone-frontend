import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Component
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Homepage from "./components/Homepage";
import Me from "./components/Me";
import LogOut from "./components/LogOut";
import Todo from './components/todo/todo'

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
                <li>
                  <Link to="/logOut" className="nav-link">Log Out</Link>
                </li>
                {/*should not be in its own page, just added the route for testing that it works */}
                <li>
                  <Link to="/Todo" className="nav-link">todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path ="/" component={LogIn}/>
          <Route exact path ="/signUp" component={SignUp}/>
          <Route exact path ="/homepage" component={Homepage}/>
          <Route exact path ="/me" component={Me}/>
          <Route exact path ="/logOut" component={LogOut}/>
          {/*should not be in its own page, just added the route for testing that it works */}
          <Route exact path ="/Todo" component={Todo}/>
        </div>
        </Router>
    )
  }
}

export default App;
