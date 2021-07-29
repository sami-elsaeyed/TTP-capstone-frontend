import { Component } from "react";
import { connect } from 'react-redux';
import { createAccountThunk } from "../redux/reducers/index";
import { Redirect } from "react-router-dom";

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName:"",
            email:"",
            password:"",
            repassword:"",
            clock:true,
            toDo:true,
            weather:false,
            news:false,
            covid:false
        }
    }

    handleChange=(event)=>{
      if (event.target.type === 'checkbox') {
        this.setState({
          [event.target.name]:event.target.checked
       })
      }
      else{
        this.setState({
           [event.target.name]:event.target.value
        })
      }
    }
    
    onSubmit=(event)=>{
      event.preventDefault();
      console.log(this.state)
      console.log(this.props.users)
      this.props.createAccount(this.state)
        
    }
    render(){
        return <div>
            <div style= {{marginTop: 100, width:500}} className="jumbotron container">
            <p style={{fontSize:22, fontFamily:"Sans-serif"}}>Create an account to get started!</p>
            <form onSubmit={this.onSubmit}>
                <label > First Name: </label>
                <input type="text" name="firstName" onChange={this.handleChange} style={{float:"right"}}/>
                <br/>
                <label >Password: </label>
                <input type="password" name="password" onChange={this.handleChange} style={{float:"right"}}/>
                <br/>
                <label >Email: </label>
                <input type="text" name="email" onChange={this.handleChange} style={{float:"right"}} />
                <br/> 
                <br/>
                <label style={{fontSize:22, fontFamily:"Sans-serif"}}>Set user Preferences</label>
                <br />
                <label style={{paddingRight:5}} >Clock</label>
                <input type = 'checkbox' name="clock" onChange={this.handleChange} checked/>
                {/* <br/>  */}
                <label style={{paddingLeft:15, paddingRight:5}}>To Do List </label>
                <input type = 'checkbox' name="toDo" onChange={this.handleChange} checked/>
                {/* <br/>  */}
                <label style={{paddingLeft:15, paddingRight:5}}>Weather </label>
                <input type = 'checkbox' name="weather" onChange={this.handleChange} />
                {/* <br/>  */}
                <label style={{paddingLeft:15, paddingRight:5}} >News </label>
                <input type = 'checkbox' name="news" onChange={this.handleChange} />
                <label style={{paddingLeft:15, paddingRight:5}} >Covid Stats </label>
                <input type = 'checkbox' name="covid" onChange={this.handleChange} />
                <br/> 
                <br/> 
                <div style={{textAlign:"center"}}>
                  <input type="submit" value="Create Account" className="btn btn-primary" />
                </div>
            </form>
            {this.props.error === 'Email is already in use' ? 
                <p className='text-danger'>Email is already in use</p> :
                null
            }
            {this.props.user ? <Redirect to = '/homepage' />: null}
        </div>
    </div>
    }

}

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createAccount: (user) => {
        dispatch(createAccountThunk(user));
      }
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);