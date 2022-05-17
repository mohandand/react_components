import React, { useState } from 'react';

const ToDo = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const getTask= (event) => {
        event.preventDefault();
        setTask(event.target.value);
    }
    const pushTask = (event) => {
        event.preventDefault();
        tasks.unshift(task);
        const newtask = [...tasks]
        setTasks(newtask);
        console.log(tasks);
    }

    const deleteTask =(event) => {
        event.preventDefault();
        tasks.splice((event.target.id),1);
        const temptask = [...tasks]
        setTasks(temptask);
    }
    

    let taskslist = tasks.map((tas,index) => {
                return <div className="taskname" key={index}>{tas}<button  id={index} onClick={deleteTask}>X</button></div>
    })

    return(
        <div className="smallcontainer">
            <div className="addtask">
                <input type="text" onChange={getTask}/>
                <button className="searchbutton" onClick={pushTask}>Add</button>
            </div>
            <div className="displaytasks">
                {taskslist}
            </div>
        </div>
    )
}

export default ToDo;