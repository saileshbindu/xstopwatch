import { useRef, useState } from "react";

const Xstopwatch = () =>{
    const [mintTime, setmintTime] = useState(0)
    const [runtimer, setRuntimer] = useState(false);
    let intervalRef = useRef(null);

    const handleStarttime = () =>{
        setRuntimer(true)
        intervalRef.current = setInterval(()=>{
            setmintTime((previoustime) => previoustime + 1)
        },1000)
    }
    const handleStoptime = () =>{
        setRuntimer(false) 
        clearInterval(intervalRef.current)
    }
    const handlereset = () =>{
        clearInterval(intervalRef.current)
        setRuntimer(false) 
        setmintTime(0)
    }
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };
return(<div style={{textAlign:"center"}}>
    <h1>Stopwatch</h1>
    <p>Time: {formatTime(mintTime)}</p>
    <div>
        {runtimer ? <button onClick={handleStoptime}>Stop</button> : <button onClick={handleStarttime}>Start</button>}
        
        <button onClick={handlereset}>Reset</button>
    </div>
</div>)
}

export default Xstopwatch;