import React, { useState } from 'react';

const ToDo = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const getTask= (event) => {
        setTask(event.target.value);
    }
    const pushTask = (event) => {
        let newtask = tasks;
        newtask.push(task);
        setTasks(newtask);
        console.log(tasks);
    }
    

    let taskslist = tasks.map((tas,index) => {
                return <div key={index}>{tas}<button>X</button></div>
    })

    return(
        <div className="todocontainer">
            <div className="addtask">
                <input type="text" onChange={getTask}/>
                <button onClick={pushTask}>Add</button>
            </div>
            <div className="displaytasks">
                {taskslist}
            </div>
        </div>
    )
}

export default ToDo;