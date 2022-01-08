import React, { useState } from 'react';

const ToDo = () => {
    return(
        <div className="todocontainer">
            <div className="addtask">
                <input type="text"/>
                <button>Add</button>
            </div>
            <div className="displaytasks">
            </div>
        </div>
    )
}

export default ToDo;