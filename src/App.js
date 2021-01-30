import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

//Component
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Homepage from "./components/Homepage";
import LogOut from "./components/LogOut";

class App extends Component {
  render(){
   return (
     <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">WidgetHub</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                {!this.props.user? 
                <>
                  <li>
                    <Link to="/signUp" className="nav-link">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/logIn" className="nav-link">Log In</Link>
                  </li>
                </> :
                <>
                  <li>
                    <Link to="/logOut" className="nav-link">Log Out</Link>
                  </li>
                  <li>
                    <Link to="/homepage" className="nav-link">Homepage</Link>
                  </li>
                </>

                }
              </ul>
            </div>
          </nav>


          <Route path ="/logIn" component={LogIn}/>
          <Route path ="/signUp" component={SignUp}/>
          <Route path ="/homepage" component={Homepage}/>
          <Route path ="/logOut" component={LogOut}/>
        </div>
        </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(App);
