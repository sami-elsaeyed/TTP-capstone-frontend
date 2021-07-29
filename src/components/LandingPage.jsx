import React from 'react'
import './styles.css'
import mainbenner  from '../photo/halgatewood-com-weRQAu9TA-A-unsplash.jpg';

class LandingPage extends React.Component {

    render() {
        return (
         <div className = "container">
             <div className="row  custom-section align-items-center">
                 <div className="col-12 col-lg-5">
            <h2>Get Started</h2>
             <h3>The All-in-One Widget App</h3>
             <p>
                 Keep all of your favorite widgets in one place. <br/>
                 With WidgetHub, you get a convenient hub that lets you customize <br />
                 your dashboard with the widgets you like, while keeping the ones you dont <br />
                 away. 
             </p>
             <p>
                 <span>Sign up</span> today to create your own WidgetHub
            </p>
                </div>
                <div className="col-12 col-lg-7">
                    <img src={mainbenner} alt="asd"/>
                </div>
             </div>
         </div>
        )
    }
}

export default LandingPage