import React, { Component } from 'react';
import axios from 'axios'

export default class Me extends Component {
    async componentDidMount() {
        axios.get('http://localhost:8080/auth/me').then(data => {
            console.log("Test");
            console.log(data);
        })
    }

    render(){
        return (
            <>
                Test.
            </>
        )
    }
}