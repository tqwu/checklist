
'use client'
import { useState } from "react";

interface Task {
  id: number;
  text: string;
}


export default function Home() {
  
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  
  const addTask = () => {
    if (newTask.trim() == "") return;
    const task: Task = { id: Date.now(), text: newTask }
    setTasks([...tasks, task])
    setNewTask("");
  }
  
  const deleteTask = ( id: number ) => {
    setTasks(tasks.filter((task) => task.id != id))
  }
  
  return (
    <div>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter task..."/>
      <button onClick={addTask}>Submit</button>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}