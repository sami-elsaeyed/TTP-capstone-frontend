import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPreferencesThunk, getUserPrefs } from '../redux/reducers';

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
            clock: false,
            toDoList: false,
            weather: false,
            news:false,
            covid: false,
            id: null
        }
    }

    async componentDidMount(){
        console.log("Homepage mounted.");
        await this.props.getUserPrefs();
    }

    displayPrefs = () => {
        let divArray = []
        
        if (this.props.user.preference.clock === true)
            divArray.push(<div > <Clock /> </div>)
        if (this.props.user.preference.covid === true)
            divArray.push(<div > <Covid /> </div>)
        if (this.props.user.preference.weather === true)
            divArray.push(<div > <Weather /> </div>)
        if (this.props.user.preference.toDoList === true)
            divArray.push(<div > <Todo /> </div>)
        if (this.props.user.preference.news === true)
            divArray.push(<div > <News /> </div>)
    
        return divArray;
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.checked});
    }

    handleSubmit = async () => {
        this.props.editPreferences(this.state)
        console.log(this.state)
        this.setState({editing: false})
    }
    handleEdit = () => {
        this.setState({
            editing: true,  
            id: this.props.user.preference.id,
            clock: this.props.user.clock,
            toDoList: this.props.user.toDoList,
            weather: this.props.user.weather,
            news:this.props.user.news,
            covid: this.props.user.covid,
        })
    }

    render() {
        return(
            this.props.user ?
            <>
             <h1> Welcome, {this.props.user.firstName} </h1>
             <button onClick={this.handleEdit}>Edit Hub</button>
             { this.state.editing ?  
                <form id="editPref" onSubmit = {this.handleSubmit}>
                    <label >Clock</label>
                    <input type = 'checkbox' name="clock" onChange={this.handleChange} defaultChecked={this.props.user.preference.clock}/>
                    <br/> 
                    <label >To Do List </label>
                    <input type = 'checkbox' name="toDoList" onChange={this.handleChange} defaultChecked={this.props.user.preference.toDoList}/>
                    <br/> 
                    <label >Weather </label>
                    <input type = 'checkbox' name="weather" onChange={this.handleChange} defaultChecked={this.props.user.preference.weather}/>
                    <br/> 
                    <label >News </label>
                    <input type = 'checkbox' name="news" onChange={this.handleChange} defaultChecked={this.props.user.preference.news}/>
                    <br/>
                    <label >Covid Stats</label>
                    <input type = 'checkbox' name="covid" onChange={this.handleChange} defaultChecked={this.props.user.preference.covid}/>
                    <br/>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form> 
                : null
             }

             <br/>
             <div className="hub">
                 {this.displayPrefs()
                 }
             </div> 
             </>
             :
             <p>loading <br />
                bug note: cookies are blocked on some browsers, so retrieving or logging in a user does not go through,<br />
                blocked on chrome and edge, works on firefox, need to find a fix
             </p>
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
        getUserPrefs: () => dispatch(getUserPrefs()),
        editPreferences: (preferences) => dispatch(editPreferencesThunk(preferences))
    };
};

export default connect(mapStateToProp, mapDispatchToProps)(Homepage);