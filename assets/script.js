var timerEl = document.getElementById('timer')
var secondsLeft = 120;
var startBtn = document.getElementById('btn-start')
var questionEl = document.getElementById('question');
var answersEl = document.getElementById('answers');
var userScoreEl = document.getElementById('user-score');
var questionNumber = -1;
var answer;
var submitBtn = document.getElementById('submit-btn');
var userNameInput;
var submitScoreEl = document.querySelector('#final-score');
var userScoreEl = document.getElementById('user-score');
// Quiz Questions
var questions = [
    {
        title: 'Commonly used data types do NOT include:',
        choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
        answer: '3. alerts'
    },
    {
        title: 'The condition in an if/else statement is enclosed with ______.',
        choices: ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'],
        answer: '3. parenthesis'
    },
    {
        title: 'Arrays in JavaScript can be used to store',
        choices: ['1. numbers and strings', '2. other arrays', '3. boolenas', '4. all of the above'],
        answer: '4. all of the above'
    },
    {
        title: 'String values must be enclosed within _____ when being assigned to variables.',
        choices: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
        answer: '3. quotes'
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
        answer: '4. console.log'
    },
];
// Start the quiz with click
function startQuiz() {
    document.getElementById('home-content').classList.add('d-none');
    document.getElementById('quiz').classList.remove('d-none');

    startTimer();

    showQuestions();

};
// Populates and starts timer
function startTimer() {
    var countdown =setInterval(function() {
        timerEl.textContent = 'Time: ' + secondsLeft;
        secondsLeft--;

        if (secondsLeft === 0 || questionNumber === questions.length) {
            clearInterval(countdown);
            setTimeout(endScore, 500);
        }
    }, 1000);    
};
// Populates questions from array
function showQuestions() {
    questionNumber++;
    answer = questions[questionNumber].answer

    questionEl.textContent = questions[questionNumber].title;
    answersEl.innerHTML = '';

    var choices = questions[questionNumber].choices;
    
    for(var i = 0; i < choices.length; i++) {
        var nextChoice = document.createElement('li', 'button');

        nextChoice.textContent = choices[i]
        answerBtn = answersEl.appendChild(nextChoice).setAttribute('class', 'nrml-button');
    }
};
// Produces quiz score
function endScore() {
    document.getElementById('quiz').classList.add('d-none');
    document.getElementById('final-score').classList.remove('d-none');
    userScoreEl.textContent = 'Your score is ' + (secondsLeft+1) + '!';
};
// Feedback functions
function hideFeedback(){
    var feedbackEl = document.getElementsByClassName("feedback")[0]
    feedbackEl.style.display='none'
};

function showFeedback(){
    var feedbackEl = document.getElementsByClassName("feedback")[0]
    feedbackEl.removeAttribute('style');
};
// answer functions
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
// Event listeners
startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    addScore();
    
    
    window.location.href = 'highscores.html'
});
// Adding score to Highscores
function addScore () {
    userNameInput = document.getElementById("userInitials").value
    
    // create a new object with name and score keys
var newScore = {
        name: userNameInput,
        score: secondsLeft
    };
    // check if there are scores in local storage first and take value
    //if not, make a blank array
    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    // push object into score array
    highScores.push(newScore)
    // turn objects into an array of strings + put it into local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
};



