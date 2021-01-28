import React, {Component} from "react";

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state={
            title:this.props.title,
            description:this.props.description
        }
    }
    handleChange=()=>{

    }
render(){
    return(
        <div>
            <div>
            
                <div >
                    <h5 contentEditable="true" maxLength="10" onChange={this.handleChange} style={{display: "inline-block"}}>{this.state.text}</h5>
                    <br/>
                    <p contentEditable="true" maxLength="10" onChange={this.handleChange} style={{display: "inline-block"}}>{this.state.description}</p>
                </div>
            </div>
        </div>
        
    )
}
}
const mapDispatchToProps =(dispatch) =>{
    return {
        updateTodoItem: ()=> dispatch(updateTodoItemThunk())
    }
}
export default connect(mapDispatchToProps)(Todo)