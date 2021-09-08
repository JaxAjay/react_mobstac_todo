import checked from './../assets/checked.png'
import remove from './../assets/remove.png'
import play from './../assets/play.png'
import edit from './../assets/edit.png'
function TodoList({todo , todoAction}) {
    
  const todoClick = (id , type ) => {
    console.log('Click!!!!' , id , type);
    todoAction(id,type)
  }  
    return (
      <div className="todo_list">
        {todo.map((data) => (
            <div className="todo-task" key={["div",data.id].join()}> 
                <h3 key={data.id}>{data.title}</h3>
                <span className="btn-span">
                <img src={edit} style={{ 'width' : '16px'}} onClick={() => todoClick(data.id , "edit" , todoAction)} />
                { data.is_done ? <img src={checked} style={{ 'width' : '16px'}} /> : <img src={play} style={{ 'width' : '12px'}} onClick={() => todoClick(data.id , "done")} /> }
                <img src={remove} style={{ 'width' : '16px'}} onClick={() => todoClick(data.id , "delete" , todoAction)} />
                </span>
                
            </div>
        ))}
      </div>
    );
  }
  
export default TodoList;