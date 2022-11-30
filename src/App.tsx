import EditFrom from './components/EditFrom/EditFrom';
import React, { useState } from 'react';
import TodoFrom from './components/TodoFrom/TodoFrom';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  interface Inter {
    name: string
    checked: boolean
    id: number
  }
  const [tasks, setTasks] = useState<Inter[]>([]);
  const [editedTask, setEditedTask] = useState<Inter>();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const addTask = (task: Inter) => {
    setTasks((prevState: Inter[]) => {
      return [...prevState, task]
    })
  }

  const deleteTask = (id: number) => {
    setTasks((prevState: Inter[]) => {
      return prevState.filter(t => t.id != id
      )
    })
  }
  const toggleTask = (id: number) => {
    setTasks(prevState => prevState.map(t => (
      t.id == id ? { ...t, checked: !t.checked } : t
    )))
  }

  const updateTask = (task: any) => {
    setTasks(prevState => prevState.map(t => (
      t.id == task.id ? { ...t, name: task.name } : t
    )))

    closeEditMode();
  }
  const closeEditMode = () => {
    setIsEditing(false)
  }

  const enterEditMode = (task: Inter) => {
    setEditedTask(task)
    setIsEditing(true)
  }
  return (
    <div className="root">
      <div className="box">
        <div className='header'>
          <h2>  Learn to make Todo App</h2>
        </div>
        {
          isEditing && editedTask && (
            <EditFrom
              editedTask={editedTask}
              updateTask={updateTask}
            />
          )
        }

        <TodoFrom addTask={addTask} />

        {tasks &&
          <TodoList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />}
      </div>
    </div>

  );
}

export default App;
