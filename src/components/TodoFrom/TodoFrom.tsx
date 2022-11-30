import React, { ChangeEventHandler, FC, FormEvent } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import './index.css';
import{ useState } from 'react';
// FC 是Function Component的缩写，是函数组件
interface Inter{
  name:string
  checked:boolean
  id:number
}
interface IProps{
  addTask:(num:Inter)=>void
}

const TodoFrom:FC<IProps> = ({addTask})=> {

  const [task,setTask] = useState<string>("");

  const handleFromSubmit = (e:FormEvent)=>{
    e?.preventDefault();
    // 防止在提交表单时，刷新整个网页
    addTask({
      name:task,
      checked:false,
      id:Date.now()
    })
    setTask("");
    // 点击提交后，输入栏内容会被清空
  }
  
  const onInput : ChangeEventHandler<HTMLInputElement> = (e) =>{
    setTask(e.target.value)
  }

  return (
    <form 
    className='todoForm'
    onSubmit={handleFromSubmit}
    >
      <input 
        type="text"
        value={task}
        onInput={onInput}
        placeholder=' ENTER TASK'
        required
        autoFocus
        maxLength={60}
        className ="input"
        />
      <button className='btn handerbtn' type='submit'>
        <PlusOutlined />
      </button>
       
    </form>
  )
}
export default TodoFrom