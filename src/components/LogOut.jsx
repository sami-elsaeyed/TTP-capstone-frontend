import { Component } from "react"
import axios from 'axios';

export default class Login extends Component {

    async componentDidMount() {
        axios.delete('http://localhost:8080/auth/logout').then(data => {
            console.log("Test");
            console.log(data);
        })
    }

    render(){
        return (
            <>
                Logged Out.
            </>
        )
    }

}