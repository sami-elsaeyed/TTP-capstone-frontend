import {Component}from 'react';
import './clock.css';

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    async componentDidMount(){
        this.updateTime();
    }

    sleep(ms){ // Sleep function to allow awaiting during asynchronous tasks which resovles after inputted paramter.
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async updateTime(){ // Function to show clock functionality.
        var chour = document.getElementById("chr"); // Actual clock hand (div element). 
        var cmin = document.getElementById("cmin"); // Actual clock hand (div element).
        var csec = document.getElementById("csec"); // Actual clock hand (div element). 
    
        const deg = 6;
        var seconds = 0; // Variable to store how many seconds have elapsed.
        var minutes = 0; // Variable to store how many minuts have elapsed.
    
        var now = Date.now(); // Variable to get the time of function call.
        while(true){ // Loop until array is sorted.
            var time = Date.now() - now // Get the time of loop initiation minus when we started the function call.
            var mseconds = Math.floor(time * 0.1); // Getting how many miliseconds have elapsed.
            if(mseconds > 100){ // Only counting the last 2 digits, if greater than 100 we reset back to zero to only show the last two digits.
                mseconds = 0; // Reset milliseconds to 0
                now = Date.now(); // Get new time elapsed.
                seconds++; // Increment seconds
                if(seconds === 60){
                    seconds = 0
                    minutes++; // If a minute has elapsed reset seconds to 0 and increment minutes.
                } 
            }
            var hours = 60 % minutes; // Possibly never reach an hour of sorting but included just for functionality.
    
            chour.style.transform = `rotateZ(${hours}deg)`; // Rotating actual div element to rotate the hand by deg * time elapsed respectively. 
            cmin.style.transform = `rotateZ(${minutes * deg}deg)`; // Rotating actual div element to rotate the hand by deg * time elapsed respectively.
            csec.style.transform = `rotateZ(${seconds * deg}deg)`; // Rotating actual div element to rotate the hand by deg * time elapsed respectively.
            await this.sleep(10);
        }
    }

    render() {
        return (
            <div className="clockContainer">
                <div className="clock">
                    <div className="hour" id="chr"></div>
                    <div className="minute" id="cmin"></div>	
                    <div className="second" id="csec"></div>
                </div>
            </div>
        )
    }
}
