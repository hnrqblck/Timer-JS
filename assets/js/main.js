function timer() {
    const CLOCK = document.querySelector('.clock');
    let seconds = 0;
    let timer;
    
    document.addEventListener('click', function(e) {
        const el = e.target;
    
        if (el.classList.contains('start')) {
            clearInterval(timer);
            startTimer();
        }
        if (el.classList.contains('pause')) {
            pauseTimer();
        }
        if (el.classList.contains('clear')) {
            clearTimer();
        }
    })
    
    function getTime(time) {
        let startTime = new Date(time * 1000);
        
        return startTime.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    function startTimer() {
        timer = setInterval(function(){
            seconds++;
            CLOCK.innerHTML = getTime(seconds);
        }, 1000);
        CLOCK.classList.remove('red');
    }
    
    function pauseTimer() {    
        clearInterval(timer);
        CLOCK.classList.add('red');
    }
    
    function clearTimer () {
        pauseTimer();
        seconds = 0;
        CLOCK.innerHTML = getTime(seconds);
        CLOCK.classList.remove('red');
    }
}
timer();