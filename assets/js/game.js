$(document).ready(function(){
// Timer 
    var isWaiting = false;
    var isRunning = false;
    var seconds = 5;
    var countdownTimer;
    var finalCountdown = false;
    var waitingTimeDiv = document.getElementById('waiting_time')

    var questions = [{
    question: "What is the name of the character that Diane Keaton plays?",
    choices: ["Ellen", "Kay", "Connie", "Lucy"],
    correctAnswer: 1
}, {
    question: "The Godfather was based on a novel written by...?",
    choices: ["Francis Coppola", "Lorenzo Veti", "Mario Puzo", "Stan Howard"],
    correctAnswer: 0
}, {
    question: "Which member of the Corleone family was the first to meet Tom Hagen?",
    choices: ["Sonny", "Freddie", "Conni", "Vito"],
    correctAnswer: 0
}];

    var currentQuestion = 0;
    var correctAnswers = 0;
    var gameOver = false;

//this is where we call the GameTimer function
$("#qscreen").click(function(){
    $(this).fadeOut('slow');
    GameTimer();

})
// Game Timer
function GameTimer() {
    // var minutes = Math.round((seconds - 30) / 60);
    // var remainingSeconds = seconds % 60;
    var countdownTimer = setInterval(function(){
        seconds--;
        if (seconds === 0) {
        alert("Times up");
        seconds = "0" + seconds;
        clearInterval(countdownTimer);
        //game over
        }
        else if (seconds < 10) {
        seconds = "0" + seconds;
        }
        waitingTimeDiv.innerHTML ="Time Remaining " + "00" + ":" + seconds;
        
    },1000 )
    

    // waitingTimeDiv.innerHTML ="Time Remaining " + minutes + ":" + remainingSeconds;
    // if (seconds === 0) {
    //     isRunning = true;
    //     seconds += 0;
        
    //     if (finalCountdown) {
    //         clearInterval(countdownTimer);
    //     } else {
    //         finalCountdown = true;
    //     }

    // } else {
    //     isWaiting = true;
    //     seconds--;
    // }
}
// Display the first question
    displayCurrentQuestion();
    $(this).find(".gameMessage").hide();

// On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        seconds = 20;
        if (!gameOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".gameMessage").text("Please select an answer");
                $(document).find(".gameMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".gameMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                    
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    gameOver = true;
                }
            }
        } else { // game is over and clicked the next button (which now displays 'Play Again?'
            gameOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetGame();
            displayCurrentQuestion();
            hideScore();
        }
    });


// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".gameContainer > .question");
    var choiceList = $(document).find(".gameContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetGame() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".gameContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".gameContainer > .result").show();
};

});


