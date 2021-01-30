import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserPrefs } from '../redux/reducers';

import Todo from './todo/todo';
import './styles.css';
import Weather from './Weather';
import News from './News';
import Covid from './Covid';
import Clock from './Clock';

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false,
        }
    }


    async componentDidMount(){
        console.log("Homepage mounted.");
        await this.props.getUserPrefs();
    }

    displayPrefs = () => {
        let divArray = []
        if (this.props.user.preference.covid === null)
            divArray.push(<div> <Covid /> </div>)
        if (this.props.user.preference.news === null)
            divArray.push(<div> <News /> </div>)
        if (this.props.user.preference.weather === null)
            divArray.push(<div> <Weather /> </div>)
        if (this.props.user.preference.toDoList === true)
            divArray.push(<div> <Todo /> </div>)
        if (this.props.user.preference.clock === true)
            divArray.push(<div> <Clock /> </div>)
        return divArray;
    }

    handleChange = (event) => {
        console.log(this.props.user.preference);
        this.props.user.preference[event.target.name] = event.target.checked;
    }

    render() {
        return(
            <>
             <h1> Welcome, {this.props.user.firstName} </h1>
             <button onClick={() => this.setState({ editing: true })}>Edit Hub</button>
             { this.state.editing ?  
                <form id="editPref">
                    <label >Clock</label>
                    <input type = 'checkbox' name="clock" onChange={this.handleChange} checked={this.props.user.preference.clock}/>
                    <br/> 
                    <label >To Do List </label>
                    <input type = 'checkbox' name="toDoList" onChange={this.handleChange} checked={this.props.user.preference.toDoList}/>
                    <br/> 
                    <label >Weather </label>
                    <input type = 'checkbox' name="weather" onChange={this.handleChange} checked={this.props.user.preference.weather}/>
                    <br/> 
                    <label >News </label>
                    <input type = 'checkbox' name="news" onChange={this.handleChange} checked={this.props.user.preference.news}/>
                    <br/>
                    <label >Covid </label>
                    <input type = 'checkbox' name="covid" onChange={this.handleChange} checked={this.props.user.preference.covid}/>
                    <br/>
                    <button onClick={() => this.setState({ editing: false })}>Submit</button>
                </form> 
                : null
             }
             
             <br/>
             <div className="hub">
                 {this.displayPrefs()}
             </div>
            </>
        )
    }
}


const mapStateToProp = (state) => {
    console.log('MAPPING STATE TO PROPS');
    return { 
        user: state.user 
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log('MAPPING DISPATCH TO PROPS');
    return { 
        getUserPrefs: () => dispatch(getUserPrefs())
    };
};

export default connect(mapStateToProp, mapDispatchToProps)(Homepage);