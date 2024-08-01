
function TodoItem( {todoName, todoDate, onDeleteClick}) {
  return (
    <div className="row">
    <div className="col-4">{todoName}</div>
    <div className="col-2">{todoDate}</div>
    <div className="col-4">
      <button type="button" className="btn btn-danger"
      onClick={() => onDeleteClick(todoName)}>Delete</button>
    </div>
     </div>


    

  )
}

export default TodoItem