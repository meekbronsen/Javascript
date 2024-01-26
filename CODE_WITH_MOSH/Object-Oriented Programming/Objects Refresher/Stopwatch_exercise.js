function Stopwatch(){
    let startTime, stopTime, running, seconds = 0;
    
    this.start = () => {
        if (!running){
            startTime = new Date;
            running = true;
        }
        else if (running){
            throw new Error("The watch is already running!!");
        }
    },
    this.stop = () => {
        if (running){
            running = false
            stopTime = new Date;
            const duration = (stopTime.getTime() - startTime.getTime()) / 1000
            seconds += duration
        }
        else if (!running){
            throw new Error("The watch is not running");
        }
    },
    this.reset = () => {
        startTime, stopTime, running, seconds = 0;
    },
    Object.defineProperty(this, "duration", {
        get: function(){ return seconds }
    });
}

stopwatch = new Stopwatch;

