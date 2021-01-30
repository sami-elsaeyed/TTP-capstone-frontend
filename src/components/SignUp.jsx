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
            repassword:"",
            clock:true,
            toDo:true,
            weather:false,
            news:false,
            covid:false
        }
    }

    handleChange=(event)=>{
      console.log(event.target)
      console.log(event.target.checked)
      console.log(event.target.value)
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
                <label>Set user Preferences</label>
                <br />
                <label >Clock</label>
                <input type = 'checkbox' name="clock" onChange={this.handleChange} checked/>
                <br/> 
                <label >To Do List </label>
                <input type = 'checkbox' name="todo" onChange={this.handleChange} checked/>
                <br/> 
                <label >Weather </label>
                <input type = 'checkbox' name="weather" onChange={this.handleChange} />
                <br/> 
                <label >News </label>
                <input type = 'checkbox' name="news" onChange={this.handleChange} />
                <br/> 
                <input type="submit" value="Create Account" className="btn btn-primary" />
            </form>
        </div>
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
      createAccount: (user) => {
        dispatch(createAccountThunk(user));
      }
    };
  };

  export default connect(null, mapDispatchToProps)(SignUp);