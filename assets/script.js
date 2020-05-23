var timerEl = document.getElementById('timer')
var secondsLeft = 120;
var startBtn = document.getElementById('btn-start')
var questionEl = document.getElementById('question');
var answersEl = document.getElementById('answers');
var questionNumber = -1;
var answer;

var questions = [
    {
        title: 'Commonly used data types do NOT include:',
        choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
        answer: '3. alerts'
    },
    {
        title: 'The condition in and if/else statement is enclosed with ______.',
        choices: ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'],
        answer: '3. parenthesis'
    },
    {
        title: 'Arrays in JavaScript can be used to store',
        choices: ['1. numbers and strings', '2. other arrays', '3. boolenas', '4. all of the above'],
        answer: '4. all of the above'
    },
    {
        title: 'String values mist be enclosedd withing _____ when being assigned to variables.',
        choices: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
        answer: '3. quotes'
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
        answer: '4. console.log'
    },
];

function startQuiz() {
    document.getElementById('home-content').classList.add('d-none');
    document.getElementById('quiz').classList.remove('d-none');

    startTimer();

    showQuestions();

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

function showQuestions() {
    questionNumber++;
    answer = questions[questionNumber].answer

    questionEl.textContent = questions[questionNumber].title;
    answersEl.innerHTML = '';

    var choices = questions[questionNumber].choices;
    
    for(var i = 0; i < choices.length; i++) {
        var nextChoice = document.createElement('button');

        nextChoice.textContent = choices[i]
        answerBtn = answersEl.appendChild(nextChoice).setAttribute('class', 'nrml-button');
    }
};

function hideFeedback(){
    var feedbackEl = document.getElementsByClassName("feedback")[0]
    feedbackEl.style.display='none'
}

function showFeedback(){
    var feedbackEl = document.getElementsByClassName("feedback")[0]
    feedbackEl.removeAttribute('style');
}

answersEl.addEventListener("click", function (event) {
    var feedbackEl = document.getElementsByClassName("feedback")[0]
    
    // evaluation of user's answer choices & feedback
    if (answer === event.target.textContent) {   
        feedbackEl.innerHTML = "Correct!";
        setTimeout(hideFeedback,1225);
        showFeedback();   
        
    } else {
        feedbackEl.innerHTML = "Wrong!";
        setTimeout(hideFeedback,1225);
        secondsLeft = secondsLeft - 20;
        showFeedback();
    }    
    showQuestions();
});

startBtn.addEventListener('click', startQuiz);


