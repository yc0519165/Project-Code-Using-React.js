import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css"
import './app.css'
import { useState } from "react";
import { TodoListContext } from "./store/todo-item-store";
import Container from "./components/Container";


function App (){

  const [todoItems, setTodoItems] = useState([])
  const [setApp, reSetApp] = useState('Home')

  const handleNemItem = (itemName, itemDueDate) =>{
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`)
    const newTodoItem =[
      ...todoItems, {name: itemName, dueDate: itemDueDate}
    ]
    setTodoItems(newTodoItem);
  }
  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItem);
  }
  
  return (
    <TodoListContext.Provider value={{
      todoItems,
      handleNemItem,
      handleDeleteItem,
      setApp,
      reSetApp,

    }}>
    <Container>
    <AppName></AppName>
    {setApp === 'Home' ? <TodoItems ></TodoItems> : <AddTodo ></AddTodo>}
    </Container>
  </TodoListContext.Provider>
  )
}

export default App ;