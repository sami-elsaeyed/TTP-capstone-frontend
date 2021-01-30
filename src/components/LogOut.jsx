import { Component } from "react"
import { connect } from 'react-redux'
import { logoutThunk } from "../redux/reducers";

class Logout extends Component {

    async componentDidMount() {
        
        this.props.logOut()
        
    }

    render(){
        return (
            <>
                Logged Out.
            </>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logoutThunk())
    }
}

export default connect(null, mapDispatchToProps)(Logout)