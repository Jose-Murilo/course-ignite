import styles from './App.module.css';

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { EmptyTasks } from './components/EmptyTask';

export interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])

  function addTasks(titleTasks: string) {
    if (titleTasks) {
      setTasks([...tasks, {
          id: uuidv4(),
          title: titleTasks,
          isCompleted: false
      }]);
    } else {
      alert('Digite alguma tarefa no campo!')
    }
  }

  function deleteTask(taskID: string) {
    const newTasks = tasks.filter(task => task.id !== taskID)  
    const isCertainty = confirm('Tem certeza que deseja apagar essa tarefa?')

    if (isCertainty) {
      setTasks(newTasks)
    } else {
      return tasks
    }
  }

  function completedTask(taskID: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskID) {
        return {
          ...task, 
          isCompleted: !task.isCompleted
        }
      }

      return task;
    })
    
    setTasks(newTasks)
  }

  return (
    <div className={styles.App}>
      <Header onAddTasks={addTasks} />      

      <main>
        <Tasks tasks={tasks} onDelete={deleteTask} onCompleted={completedTask} /> 

        {/* {tasks.length === 0 && <EmptyTasks tasks={tasks} />} */}
      </main>
    </div>
  )
}