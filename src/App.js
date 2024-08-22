import React, { useState } from 'react'
import './App.css'

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        setTasks([...tasks, { text: newTask}]);
        setNewTask('');
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    return (
        <div>
            <h1>Daily Tasks</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li 
                        key={index}
                        className={`task-item ${task.completed ? 'completed' : ''}`}
                        onClick={() => toggleTaskCompletion(index)}>{task.text}
                    </li>
                ))}
            </ul>
            <input
                type = "text"
                value = {newTask}
                onChange = {handleInputChange}
                placeholder='What u gonna do today?'
            />
            <button onClick={addTask}>Add task</button>

        </div>
    );
}