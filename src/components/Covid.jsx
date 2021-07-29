import { Component } from "react";
import { connect } from "react-redux";
import { getCovid } from '../redux/reducers';
import './styles.css'

class Covid extends Component {
    async componentDidMount(){
        console.log("Covid mounted.");
        await this.props.getCovid();
    }

    render(){
        const { dailyNegative, dailyPositive, dailyTests } = (this.props.covid !== undefined ? this.props.covid : "Loading covid numbers")
        return (

            <>
            <div style={{marginTop:50,marginBottom:50}}className="covid">
            <h1>COVID STATS</h1>
                <h6>Daily Negative:</h6>
                <h6>Daily Positive:</h6> 
                <h6>Daily Test:</h6> 
                <span>{ dailyNegative }</span>
                <span style={{paddingRight:125}}>{ dailyPositive }</span>
                <span>{ dailyTests }</span>
            </div>
            </>

        )
    }

}

const mapStateToProp = (state) => {
    console.log('MAPPING STATE TO PROPS');
    return {
        covid: state.covid,
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log('MAPPING DISPATCH TO PROPS');
    return { 
        getCovid: () => dispatch(getCovid())
    };
};

export default connect(mapStateToProp, mapDispatchToProps)(Covid);