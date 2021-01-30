import { Component } from "react";
import { connect } from "react-redux";
import { getWeather } from '../redux/reducers';

class Weather extends Component {
    async componentDidMount(){
        console.log("Weather mounted.");
        await this.props.getWeather();
    }

    render(){
        const { name } = (this.props.weather !== undefined ? this.props.weather : "Loading");
        const { speed } = (this.props.weather.wind !== undefined ? this.props.weather.wind : "Loading");
        const { feels_like, humidity, temp } = (this.props.weather.main !== undefined ? this.props.weather.main : "Loading");
        //const { description } = (this.props.weather.weather[0] !== undefined ? this.props.weather.weather[0] : "Loading forecast");
        return (
            <>
                <h1>Weather</h1>
                <h2>{name}</h2>
                Windspeed: {speed} mph <br/>
                {//Description: {description.split(" ").map((word) => word.charAt(0).toUpperCase(0) + word.slice(1)).join(" ") } <br/>*/
                }   
                Temperature: {temp} <br/>
                Feels Like: {feels_like} <br/> 
                Humidity: {humidity} <br/>
                <br/>
            </>
        )
    }

}

const mapStateToProp = (state) => {
    console.log('MAPPING STATE TO PROPS');
    return {
        weather: state.weather,
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log('MAPPING DISPATCH TO PROPS');
    return { 
        getWeather: () => dispatch(getWeather())
    };
};

export default connect(mapStateToProp, mapDispatchToProps)(Weather);