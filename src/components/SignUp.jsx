import { Component } from "react";
import { Route } from "react-router-dom";

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            email:"",
            password:"",
            repassword:""

        }
    }
    handleUser=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handlePass=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    handleRepass=(event)=>{
        this.setState({
            repassword:event.target.value
        })
    }
    handleEmail=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    onSubmit=(event)=>{
        event.preventDefault();
        
    }
    render(){
        return <div style= {{marginTop: 100, marginLeft:300, marginRight:500}}>
            <form onSubmit={this.onSubmit}>
                <label > Username: </label>
                <input type="text" onChange={this.handleUser} style={{float:'right'}}/>
                <br/>
                <label >Password: </label>
                <input type="password" onChange={this.handlePass} style={{float:'right'}}/>
                <br/>
                <label >Re-Enter Password: </label>
                <input type="password" onChange={this.handleRepass} style={{float:'right'}}/>
                <br/> 
                <label >Email: </label>
                <input type="text" onChange={this.handleEmail} style={{float:'right'}} />
                <br/>
                <br/>
                <input type="submit" value="Create Account" className="btn btn-primary" style={{margin:'auto'}}/>
            </form>
        </div>
    }

}


export default SignUp