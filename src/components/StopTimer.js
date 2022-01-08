import React ,{ useState } from 'react';

const StopTimer = () => {
    let time = new Date();
    console.log(time);
    return(
        <div className="stopwatchcontainer">
            Stop Watch
        </div>
    )
}
export default StopTimer;