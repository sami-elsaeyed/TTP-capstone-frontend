import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserPrefs } from '../redux/reducers';

class Homepage extends Component{
    async componentDidMount(){
        console.log("Homepage mounted.");
        await this.props.getUserPrefs();
    }

    render() {
        return(
            <>
             {this.props.prefs}
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