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

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
        <div class="container">
            <h1>Daily Tasks</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li  
                        key={index}
                        className={`task-item ${task.completed ? 'completed' : ''}`}
                        onClick={() => toggleTaskCompletion(index)}>
                        <div className="task-text">
                            {task.text}
                        </div>
                        <button className="remove-button" onClick={(e) => {
                            e.stopPropagation();
                            removeTask(index);
                        }}>X</button>

                    </li>
                ))}
            </ul>
            <input
                type = "text"
                value = {newTask}
                onChange = {handleInputChange}
                placeholder='What u gonna do today?'
            />
            <button class="button-add" onClick={addTask}>Add task</button>

        </div>
    );
}