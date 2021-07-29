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
        // const { description } = (this.props.weather.weather !== undefined ? this.props.weather.weather[0] : "Loading forecast");
        return (
            <>
            <div className="weather container ">


                <h2>{name}</h2>
                <h1>{temp}<sup className="fahrenheit">F</sup></h1>
                <p className="feel">Feels Like: {feels_like}<sup>F</sup></p>       
                <span className="info"> Windspeed: {speed} mph <br/>
                Humidity: {humidity}%</span> <br/>
                {/* Description: {description.split(" ").map((word) => word.charAt(0).toUpperCase(0) + word.slice(1)).join(" ") } <br/>   */}      
                <br/>
            </div>

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