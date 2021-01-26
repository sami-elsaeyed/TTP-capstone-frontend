import { Component } from "react"

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:""
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
    onSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state)
    }
    render(){
        return <div style= {{marginTop: 100, marginLeft:300, marginRight:570}}>
            <form onSubmit={this.onSubmit}>
                <label > Username: </label>
                <input type="text" onChange={this.handleUser} style={{float:'right'}}/>
                <br/>
                <label >Password: </label>
                <input type="password" onChange={this.handlePass} style={{float:'right'}}/>
                <br/>
                <br/>
                <input type="submit" value="Log In" className="btn btn-primary" />
            </form>
        </div>
    }

}
export default Login