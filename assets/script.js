var timerEl = document.getElementById('timer')
var secondsLeft = 120;
var startBtn = document.getElementById('btn-start')

function startQuiz() {
    document.getElementById('home-content').classList.add('d-none');
    document.getElementById('quiz').classList.remove('d-none');

    startTimer();

}

function startTimer() {
    var countdown =setInterval(function() {
        timerEl.textContent = 'Time: ' + secondsLeft;
        secondsLeft--;

        if (secondsLeft === 0) {
            timerEl.textContent = '';
            clearInterval(countdown);
        }
    }, 1000);    
}

startBtn.addEventListener('click', startQuiz);


