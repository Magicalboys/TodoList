import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
interface Inter{
  name:string
  checked:boolean
  id:number
}
interface IProps{
  tasks:Inter[]
  deleteTask:(num:number)=>void
  toggleTask:(num:number)=>void
  enterEditMode:(num:Inter)=>void
}

function  TodoList(props:IProps) {
  return (
    <ul>
      {
        props.tasks.sort((a,b)=>b.id-a.id).map((task:Inter) =>{
          return(
          <TodoItem
            key={task.id}
            task={task}
            deleteTask = {props.deleteTask}
            toggleTask = {props.toggleTask}
            enterEditMode = {props.enterEditMode}
            />
          )
        })
      }
    </ul>
  )
}

export default TodoList