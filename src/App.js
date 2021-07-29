import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './components/styles.css';

import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

//Component
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Homepage from "./components/Homepage";
import LogOut from "./components/LogOut";
import LandingPage from './components/LandingPage';

class App extends Component {
  render(){
   return (
     <Router>
        <div>
          <header className="head">
        <nav className="navbar navbar-expand-lg navbar-light bg-light head_custom-nav">
            <Link to="/" className="navbar-brand ">WidgetHub</Link>
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                {!this.props.user? 
                <>
                  <li className="nav-item">
                    <Link to="/signUp" className="nav-link">Sign Up</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/logIn" className="nav-link">Log In</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link text-primary">Contact Us</Link>
                  </li>
                </> :
                <>
                  <li className="nav-item">
                    <Link to="/logOut" className="nav-link">Log Out</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/homepage" className="nav-link">Homepage</Link>
                  </li>
                </>

                }
              </ul>
            </div>
          </nav>
          </header>

          <Route path ="/logIn" component={LogIn}/>
          <Route path ="/signUp" component={SignUp}/>
          <Route path ="/homepage" component={Homepage}/>
          <Route path ="/logOut" component={LogOut}/>
          <Route exact path = '/' component = {LandingPage} />
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
