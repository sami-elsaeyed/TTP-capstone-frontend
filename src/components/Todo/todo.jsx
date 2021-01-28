import { Component } from "react";
import { connect } from "react-redux";

import TodoItem from "./todoList";
import { getTodoItemsThunk , addTodoItemThunk} from "../../redux/reducers/index";

class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            item:{
                newTitle:"",
                newDescription:""
            },
            addNew:false
        }
    }
    componentDidMount(){
        this.props.getTodoItems()
        console.log(this.props)
    }
    handleNew=()=>{
        this.setState({
            addNew:true
        })
    }
    handleChange=(event)=>{
        this.setState({
            item:{
           [event.target.name]:event.target.value
            }
        })
    }
    onSubmit=()=>{
        console.log(this.state)
        this.props.addTodoItem(this.state.item)
        this.setState({
            addNew:false
        })
    }
    render(){
         if(this.state.addNew){
         return(
            <div style= {{marginTop: 100, marginLeft:300, marginRight:570}}>
            <form onSubmit={this.onSubmit}>
                <label > Title: </label>
                <input type="text" name="newTitle" onChange={this.handleChange} style={{float:'right'}}/>
                <br/>
                <label >Description: </label>
                <input type="textarea" name="newDescription" onChange={this.handleChange} style={{float:'right'}}/>
                <br/>
                <br/>
                <input type="submit" value="Create Item" className="btn btn-primary" />
            </form>
        </div>
         )}
         else{
        return <div>
            <h4>Todo List</h4>
            <div>
                <div >
                    <TodoItem/>
                </div>

            </div>
            <div>
                <button onClick={this.handleNew}>Add Todo Item</button>
            </div>
        </div>
         }
    }
}

const mapStateToProp= (state)=>{
    return{
        allTodo: state.Todo
    }
}

const mapDispatchToProps =(dispatch) =>{
    return {
        getTodoItems: ()=> dispatch(getTodoItemsThunk()),
        addTodoItem: ()=> dispatch(addTodoItemThunk())
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(Todo)