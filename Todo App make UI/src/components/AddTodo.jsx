import { useContext, useState } from "react"
import { TodoListContext } from "../store/todo-item-store"


const AddTodo = () => {

  const { handleNemItem } = useContext(TodoListContext)
  const { reSetApp } = useContext(TodoListContext)

  const [todoName, setTodoName] = useState("")
  const [dueDate, setDueDate] = useState ("")

  const handleNameChange = (event) =>{
    setTodoName(event.target.value)
  }
  const handleDateChange = (event) =>{
    setDueDate(event.target.value)
  }
  const handleAddButtonClicked = () =>{
    handleNemItem(todoName,dueDate)
    setTodoName("");
    setDueDate("");

  }
  return ( 
    <>
    <div className="row">
      <a className="arrow" onClick={() => {reSetApp('Home')}}><i className="bi bi-arrow-left"></i></a>
    <div className="notation-1 col-4">
      <p className="paraLine-1">What is to be done?</p>
    <input className="add-todo" type="text" placeholder="Enter Task Here" value={todoName} onChange={handleNameChange}/></div>
      <div className="notation-2 col-2">
      <p className="paraLine-2">Due Date</p>
      <input className="add-date" type="date" placeholder='Set Date' value={dueDate} onChange={handleDateChange}/></div>

      <div className="default-list-group mb-3" >
      <label htmlFor="disabledSelect" className="default-list-lebel form-label">Disabled select menu</label>
      <select id="disabledSelect" className="default-list-select form-select"  >
        <option>Person</option>
        <option>Disabled</option>
        <option>select</option>
        <option>Office</option>

      </select>
    </div> 

    <div className="btns add-btn col-4"><button type="button" className="btn btn-success button" 
    onClick={handleAddButtonClicked}>Add</button></div>
    </div>
    </>

  )
}

export default AddTodo