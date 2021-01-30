import React, {Component} from "react";
import { connect } from "react-redux";
import { deleteTaskThunk } from '../../redux/reducers/index'

class TodoItem extends Component{

    deleteTask = e => {
        this.props.deleteTaskThunk(e.target.value)
    }

    render(){
        console.log("this is item");
        return(
            <div className="">
                <h5 maxLength="10" onChange={this.handleChange} style={{display: "inline-block"}}>{this.props.task.task}</h5>
                <button className="btn btn-primary" onClick = {this.deleteTask} value = {this.props.task.id}>Remove Task</button>
            </div>
            
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        deleteTaskThunk: (id)=> dispatch(deleteTaskThunk(id))
    }
}
export default connect(null, mapDispatchToProps)(TodoItem)