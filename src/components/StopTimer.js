import React ,{ useState,useEffect } from 'react';

const StopTimer = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        let interval = null;
      
        if (isActive && isPaused === false) {
          interval = setInterval(() => {
            setTime((time) => time + 10);
          }, 10);
        } else {
          clearInterval(interval);
        }
        return () => {
          clearInterval(interval);
        };
      }, [isActive, isPaused]);
    
    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
      };

      const handlePauseResume = () => {
        setIsPaused(!isPaused);
      };

      const handleReset = () => {
        setIsActive(false);
        setTime(0);
      };


      const StartButton = (
        <button className="btn btn-one btn-start"
             onClick={handleStart}>
          Start
        </button>
      );

      const ActiveButtons = (
        <div className="btn-grp">
          <button className="btn btn-two" 
               onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-one" 
               onClick={handlePauseResume}>
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>
      );

    return(
        <div>
          <div className="timer">
           <span className="digits">
             {("0" + Math.floor(({time} / 60000) % 60)).slice(-2)}{time}:
           </span>
           <span className="digits">
             {("0" + Math.floor(({time} / 1000) % 60)).slice(-2)}.
           </span>
           <span className="digits mili-sec">
              {("0" + (({time} / 10) % 100)).slice(-2)}
           </span>
          </div>
          <div className="Control-Buttons">
             <div>{isActive ? ActiveButtons : StartButton}</div>
           </div>
       </div>
    )
}
export default StopTimer;