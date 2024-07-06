import {useState, useEffect} from 'react';
const StopWatch = () => {

    // state to store time
    const [time, setTime] = useState(0);

    // state to check stopwatch running or not
    const [isRunning, setIsRunning] = useState(false);

    // state to check stopwatch is paused
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
        // setting time from 0 to 1 every 10 milisecond
        interval = setInterval(() => setTime(time + 1), 10);
        }

        // Clear interval after destroy
        return () => clearInterval(interval);
    }, [time, isRunning]);

    // Hours calculation
    const hours = Math.floor(time / 360000);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;


    const handleStart = () => {
        setIsRunning(true);
    }

    const handlePause = () => {
        setIsPaused(!isPaused);
        setIsRunning(!isRunning);
    }

    const handleStop = () => {
        alert(`Final Elapsed Time: ${hours} hours ${minutes} minutes ${seconds} seconds`);
        setTime(0);
        setIsRunning(false);
    }

    const handleReset = () => {
        setTime(0);
        setIsRunning(false);
    }

    return (
        <div className='m-auto h-auto w-96'>
            <div className='flex justify-center text-5xl my-6'>
                <span>{hours.toString().padStart(2, "0")}
                        : {minutes.toString().padStart(2, "0")}
                        : {seconds.toString().padStart(2, "0")}
                        : {milliseconds.toString().padStart(2, "0")}
                </span>
            </div>
            <div className='flex justify-center gap-2'>
                {!isRunning && !isPaused && 
                    <button className="py-1 px-3 rounded bg-green-400" onClick={() => handleStart()}>Start</button>}
                {(isRunning || isPaused) &&
                    <button className="py-1 px-3 rounded bg-yellow-400" onClick={() => handlePause()}>
                        {isPaused ? 'Continue' : 'Pause'}
                    </button>}
                {<button className="py-1 px-3 rounded bg-orange-400" onClick={() => handleReset()}>Reset</button>}
                {(isRunning || isPaused) &&
                    <button className="py-1 px-3 rounded bg-red-400" onClick={() => handleStop()}>Stop</button>
                }
            </div>
        </div>
    )
}

export default StopWatch;