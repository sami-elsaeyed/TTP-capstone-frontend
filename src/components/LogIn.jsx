import { Component } from "react"
import { connect } from 'react-redux';
import { loggingIn } from '../redux/reducers';

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email: "",
            password: ""
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state)
        await this.props.loggingIn(this.state); // Log in redux call.
        // Redirect to homepage with pref props??
    }
    render(){
        return <div>
        <div style= {{marginTop: 100, width:350}} className="jumbotron container">
            <p style={{fontSize:20, fontFamily:"Sans-serif"}}>Login and get to your Widgets</p>
            <form onSubmit={this.onSubmit}>
                <label > Email: </label>
                <input name = 'email' type="email" onChange={this.handleChange} style={{float:'right'}}/>
                <br/>
                <label >Password: </label>
                <input name = 'password' type="password" onChange={this.handleChange} style={{float:'right'}}/>
                <br/>
                <div style={{textAlign:"center"}}>        
                  <input type="submit" value="Log In" className="btn btn-primary" />
                </div> 
                <br/>
            </form>
            {this.props.error === 'Wrong email/password' ? 
                <p>Wrong email/password</p> :
                null
            }
        </div>
    }

}

const mapStateToProp = (state) => {
    return { 
        error: state.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return { 
        loggingIn: (user) => dispatch(loggingIn(user))
    };
};

export default connect(mapStateToProp, mapDispatchToProps)(Login);