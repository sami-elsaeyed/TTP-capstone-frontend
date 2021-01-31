import { Component } from "react";
import { connect } from "react-redux";

import TodoItem from "./todoItem";
import { getTodoItems, addTodoItemThunk} from "../../redux/reducers/index";

class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            item:{
                task:"",
                userId: 0
            },
            addNew:false
        }
    }
    componentDidMount(){
        this.props.getTodoItems(this.props.user.tasks)
    }

    handleNew=()=>{
        this.setState(prevState => {
            return {addNew:true,
            item: {
                ...prevState.item,
                userId: this.props.user.id
            }
            }
        })
    }
    handleChange=(event)=>{
        event.preventDefault()
        this.setState(prevState => {
            return {
            item: {
                ...prevState.item,
                [event.target.name]: event.target.value 
            }
            }
        })
    }
    onSubmit=()=>{
        this.props.addTodoItem(this.state.item)
        this.setState({
            addNew:false
        })
    }
    render(){
         if(this.state.addNew){
         return(

            <div style= {{marginTop:100, width:300}} className="jumbotron container">
            <form onSubmit={this.onSubmit}>
                <label > Task: </label>
                <input type="text" name="task" onChange={this.handleChange}/>
                <br/>
                <div style={{textAlign:"center"}}>
                    <input type="submit" value="Create Item" className="btn btn-primary" />
                </div>
            </form>
        </div>
         )}
         else{

        return <div style={{marginTop: 100, width:700 }} class="jumbotron container" >
            <h4 style={{textAlign:"center"}}>Todo List</h4>
            <br/>
            <ul className="list-group">
                {this.props.allTodo && this.props.allTodo.length !== 0 ?
                <li className="list-group" >
                    {this.props.allTodo.map((todotask, index) => {
                        return <TodoItem task = {todotask} key = {index} />
                    })} 
                </li> :
                <li className="list-group">No tasks available</li>
                }
            </ul>
            <br/>             
            <div style={{textAlign:"center"}}>
                <button className="btn btn-primary" onClick={this.handleNew}>Add Todo Item</button>
            </div> 
        </div>
         }
    }
}

const mapStateToProp= (state)=>{
    return{
        user: state.user,
        allTodo: state.Todo
    }
}

const mapDispatchToProps =(dispatch) =>{
    return {
        getTodoItems: (tasks)=> dispatch(getTodoItems(tasks)),
        addTodoItem: (newTask)=> dispatch(addTodoItemThunk(newTask))
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(Todo)