import React, { ChangeEventHandler, FC, FormEvent } from 'react';
import { FormOutlined } from '@ant-design/icons';
import './index.css';
import{ useState } from 'react';
// FC 是Function Component的缩写，是函数组件
interface Inter{
  name:string
  checked:boolean
  id:number
}
interface IProps{
  editedTask:Inter
  updateTask:(num:Inter)=>void

}

const EditFrom:FC<IProps> = ({editedTask,updateTask})=> {

  const [updatedTaskName,setUpdatedTasked] = 
  useState<string>(editedTask.name);

  const handleFromSubmit = (e:FormEvent)=>{
    e?.preventDefault();
    // 防止在提交表单时，刷新整个网页
    updateTask({...editedTask,name:updatedTaskName})
  }
  const onInput : ChangeEventHandler<HTMLInputElement> = (e) =>{
    setUpdatedTasked(e.target.value)
  }
  
  return (

  <div >
    <form 
    className='editFrom'
    onSubmit={handleFromSubmit}
    >
      <input 
        type="text"
        value={updatedTaskName}
        onInput={onInput}
        placeholder=' Update Task'
        required
        autoFocus
        maxLength={60}
        className ="input"
        />
      <button className='btn handerbtn' type='submit'>
        <FormOutlined />
      </button>  
    </form>
  </div>
    
  )
}
export default EditFrom