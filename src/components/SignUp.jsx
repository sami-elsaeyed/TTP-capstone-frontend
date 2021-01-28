import { Component } from "react";
import { connect } from 'react-redux';
import { createAccountThunk } from "../redux/reducers/index";
import { Redirect  } from "react-router-dom";

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            
            username:"",
            email:"",
            password:"",
            repassword:"",
            pref:{
                clock:false,
                todo:false,
                weather:false,
                news:false
            },
            redirect:false

        }
    }
    // handleChange=(event)=>{
    //     this.setState({
    //         pref:{
    //             [event.target.name]:!this.state.pref.[event.target.name]
    //         }
    //     })
    // }
    handleChange=(event)=>{
        this.setState({
           [event.target.name]:event.target.value
        })
    }
    onSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state)
        console.log(this.props.users)
        if(this.state.password===this.state.repassword){
            this.setState({redirect:true})
            this.props.createAccount(this.state.user)
        }
        else{
            alert("You didnt re-enter your password correctly")
            this.setState({
                password:'',
                repassword:''
            })
        }    
        
    }
    render(){
        if(this.state.redirect){
            return (<Redirect to="/"/>)

        }
        return <div style= {{marginTop: 100, marginLeft:300, marginRight:500}}>
            <form onSubmit={this.onSubmit}>
                <label > Username: </label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} style={{float:'right'}}/>
                <br/>
                <label >Password: </label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} style={{float:'right'}}/>
                <br/>
                <label >Re-Enter Password: </label>
                <input type="password" name="repassword" value={this.state.repassword} onChange={this.handleChange} style={{float:'right'}}/>
                <br/> 
                <label >Email: </label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} style={{float:'right'}} />
                <br/>
                <div>
                    <p> Pick the Widgets you would like to Initialize with your Account</p>
                    <input type="checkbox" value name="pref.clock"/>
                    <label style={{paddingLeft:5, paddingRight:15}} onChange={this.handleChange}>Clock</label>
                    <input type="checkbox" value name="pref.todo"/>
                    <label style={{paddingLeft:5, paddingRight:15}} onChange={this.handleChange}>To-Do List</label>
                    <input type="checkbox" value name="pref.weather"/>
                    <label style={{paddingLeft:5, paddingRight:15}} onChange={this.handleChange}>Weather</label>
                    <input type="checkbox" value name="pref.news"/>
                    <label style={{paddingLeft:5, paddingRight:15}} onChange={this.handleChange}>News</label>
                </div>
                
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

