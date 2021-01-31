import { Component } from "react"
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { logoutThunk } from "../redux/reducers";

class Logout extends Component {

    async componentDidMount() {
        
        this.props.logOut()
        
    }

    render(){
        return (
            <>
                Logging out...
                {!this.props.user ? <Redirect to = '/' />: null}
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logoutThunk())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)