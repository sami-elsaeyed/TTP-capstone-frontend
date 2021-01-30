import { Component } from "react";
import { connect } from "react-redux";
import { getCovid } from '../redux/reducers';

class Covid extends Component {
    async componentDidMount(){
        console.log("Covid mounted.");
        await this.props.getCovid();
    }

    render(){
        const { dailyNegative, dailyPositive, dailyTests } = (this.props.covid !== undefined ? this.props.covid : "Loading covid numbers")
        return (
            <>
            <h1>Covid Numbers</h1>
                <h6>Daily Negative:</h6>{ dailyNegative }
                <h6>Daily Positive:</h6> { dailyPositive }
                <h6>Daily Test:</h6> { dailyTests }
                <br/>
                <br/>
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