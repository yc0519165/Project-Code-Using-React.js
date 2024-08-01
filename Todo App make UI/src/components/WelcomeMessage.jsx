import { useContext } from "react";
import { TodoListContext } from "../store/todo-item-store";

const WelcomeMessage =() =>{
  const { todoItems } = useContext(TodoListContext)
  return (
    todoItems.length === 0 && <p>Enjoy your day <b>...</b></p>
  )
}
export default WelcomeMessage;