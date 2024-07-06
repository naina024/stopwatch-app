
(function (){
    let hour = 00;
    let min = 00;
    let sec = 00;
    let milisec = 0;

    const startBtn = document.querySelector(".start");
    const pauseBtn = document.querySelector(".pause");
    const stopBtn = document.querySelector(".stop");
    const resetBtn = document.querySelector(".reset");

    let stopWatchTimer = null;

    function stopWatch(){
        if(timer){
            milisec++;
            if (milisec === 100){
                sec++;
                milisec = 0;
            }

            if (sec === 60){
                min++;
                sec = 0
            }
            if (min === 60){
                hour++;
                min = 0;
                sec = 0;
            }

            let hrString = hour; 
            let minString = min; 
            let secString = sec; 
            let milisecString = milisec; 

            // Formatting time values
            if (hour < 10) { 
                hrString = "0" + hrString; 
            } 
      
            if (min < 10) { 
                minString = "0" + minString; 
            } 
      
            if (sec < 10) { 
                secString = "0" + secString; 
            } 
      
            if (milisec < 10) { 
                milisecString = "0" + milisecString; 
            } 
      
            document.querySelector('.hours').innerHTML = hrString; 
            document.querySelector('.minutes').innerHTML = minString; 
            document.querySelector('.seconds').innerHTML = secString; 
            document.querySelector('.miliseconds').innerHTML = milisecString; 
            setTimeout(stopWatch, 10); 
        }
    }

    function updateIntervalState(state){
        startBtn.innerHTML = state === "pause" ? "Continue" : "Start";
        pauseBtn.style.display = "none";
        startBtn.style.display = "initial";
        clearInterval(stopWatchTimer);
    }

    function resetWatch(){
        document.querySelector(".hours").innerHTML = '00';
        document.querySelector(".minutes").innerHTML = '00';
        document.querySelector(".seconds").innerHTML = '00';
        document.querySelector(".miliseconds").innerHTML = '00';
        hour = 00;
        min = 00;
        sec = 00;
        milisec = 0;
        stopBtn.style.display = 'none';
        updateIntervalState();
        timer = false;
    }

    function stopInterval(){
        const hrString = document.querySelector('.hours').innerHTML;
        const minString = document.querySelector('.minutes').innerHTML; 
        const secString = document.querySelector('.seconds').innerHTML;
        alert(`Final Elapsed Time: ${hrString} hours ${minString} minutes ${secString} seconds`);
        resetWatch();
    }

    // -----------------------
    // Button click Listeners

    startBtn.addEventListener('click', function (){
        startBtn.style.display = 'none';
        pauseBtn.style.display = 'initial';
        stopBtn.style.display = 'initial';
        timer = true; 
        stopWatch();
    })

    pauseBtn.addEventListener("click", function () {
        timer = false;
        updateIntervalState("pause");
    });

    stopBtn.addEventListener("click", function () {
        stopInterval();
    });

    resetBtn.addEventListener("click", function () {
        resetWatch();
    });

})();