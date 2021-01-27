import { Component } from "react";
import { connect } from 'react-redux';
import { createAccountThunk } from "../redux/reducers/index";

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName:"",
            email:"",
            password:"",
            repassword:""
            
        }
    }
    handleChange=(event)=>{
        this.setState({
           [event.target.name]:event.target.value
        })
    }
    onSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state)
        console.log(this.props.users)
        this.props.createAccount(this.state)
        
    }
    render(){
        return <div style= {{marginTop: 100, marginLeft:300, marginRight:500}}>
            <form onSubmit={this.onSubmit}>
                <label > Username: </label>
                <input type="text" name="firstName" onChange={this.handleChange} style={{float:'right'}}/>
                <br/>
                <label >Password: </label>
                <input type="password" name="password" onChange={this.handleChange} style={{float:'right'}}/>
                <br/>
                <label >Re-Enter Password: </label>
                <input type="password" name="repassword" onChange={this.handleChange} style={{float:'right'}}/>
                <br/> 
                <label >Email: </label>
                <input type="text" name="email" onChange={this.handleChange} style={{float:'right'}} />
                <br/>
                <br/>
                <input type="submit" value="Create Account" className="btn btn-primary" style={{margin:'auto'}}/>
            </form>
        </div>
    }

}
const mapStateToProps = (state) => {
    console.log('state', state);
    return {
      users: state
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
      createAccount: (user) => {
        dispatch(createAccountThunk(user));
      }
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

