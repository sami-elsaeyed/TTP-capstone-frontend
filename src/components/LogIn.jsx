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
        await this.props.loggingIn(); // Log in redux call.
        // Redirect to homepage with pref props??
    }
    render(){
        return <div style= {{marginTop: 100, marginLeft:300, marginRight:570}}>
            <form onSubmit={this.onSubmit}>
                <label > Email: </label>
                <input name = 'email' type="email" onChange={this.handleChange} style={{float:'right'}}/>
                <br/>
                <label >Password: </label>
                <input name = 'password' type="password" onChange={this.handleChange} style={{float:'right'}}/>
                <br/>
                <br/>
                <input type="submit" value="Log In" className="btn btn-primary" />
            </form>
        </div>
    }

}

// const mapStateToProp = (state) => {
//     console.log('MAPPING STATE TO PROPS');
//     return { 
//         username: state.username,
//         password: state.password, 
//     }
// };

const mapDispatchToProps = (dispatch) => {
    console.log('MAPPING DISPATCH TO PROPS');
    return { 
        loggingIn: () => dispatch(loggingIn())
    };
};

export default connect(null, mapDispatchToProps)(Login);