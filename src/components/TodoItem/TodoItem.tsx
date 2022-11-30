import React, { useState } from 'react';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './index.css';
interface Inter{
  name:string
  checked:boolean
  id:number
}

interface Iprops{
  task:Inter
  deleteTask:(num:number)=>void
  toggleTask:(num:number)=>void
  enterEditMode:(num:Inter)=>void
}

function TodoItem(props:Iprops) {

  const[isChecked,setIsChecked] = useState(props.task.checked)

  const handleCheckboxChange =()=>{
    setIsChecked(!isChecked);
    props.toggleTask(props.task.id)
  }

  return (
    <li className='task'>
      <div className='task-group'>
      <div className="cntr">
        <input
          className='checkbox'
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={props.task.name}
          id ={((props.task.id )as unknown) as string}
          />
      </div>
        <label  htmlFor={((props.task.id ) as unknown) as string} >
          {props.task.name}
        </label>
       <div className="butn">
          <button 
            className ='btn pencil'
            onClick={()=>props.enterEditMode(props.task)}
          >
            
            <FormOutlined />
          </button>

          <button 
            className ="btn trash"
            onClick={()=>props.deleteTask(props.task.id)}
            >
              <DeleteOutlined />
          </button>
       </div>
      </div>
    </li>
  )
}

export default TodoItem