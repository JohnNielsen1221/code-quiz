var timerEl = document.getElementById('timer')
var secondsLeft = 120;

function startTimer() {

}

function setTimer() {
    var countdown =setInterval(function() {
        timerEl.textContent = 'Time: ' + secondsLeft;
        secondsLeft--;

        if (secondsLeft === 0) {
            timerEl.textContent = '';
            clearInterval(countdown);
        }
    }, 1000);    
}
