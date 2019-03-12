//global variables
var quizQuestion = [
    {
        question: "What does Schuylkill mean?",
        answers: ["Old black water", "Turtle crossing place", "Place not to drink from", "Hidden river"],
        correctAnswer: "Hidden river",
        imgFile: "assets/images/Schuylkill.jpg"
    },
    {
        question: "What motto is engraved on the liberty bell?",
        answers: ["The tree of liberty must be refreshed with the blood of the patriots and tyrants", "Proclaim liberty throughout all the land unto all inhabitants thereof", "This be the liberty belle", "Give me liberty or give me death"],
        correctAnswer: "Proclaim liberty throughout all the land unto all inhabitants thereof",
        imgFile: "assets/images/libertybell.jpg"
    },
    {
        question: "Which of these Philly institutions was not the first of its kind in the nation?",
        answers: ["The Philadelphia zoo", "The Philadelphia orchestra", "The Philadelphia stock exchange", "Pennsylvania hospital"],
        correctAnswer: "The Philadelphia orchestra",
        imgFile: "assets/images/orchestra.jpeg"
    },
    {
        question: "Which of the following does not appear on the seal of Philadelphia?",
        answers: ["A disembodied arm", "A whale", "A sailing ship", "Two women"],
        correctAnswer: "A whale",
        imgFile: "assets/images/seal.png"
    },
    {
        question: "If I say meet me at the eagle, where should you show up?",
        answers: ["On the main quad at Penn", "At the zoo", "At Lincoln financial field", "At the center city Macy’s"],
        correctAnswer: "At the center city Macy’s",
        imgFile: "assets/images/eagle.jpg"
    },
    {
        question: "What is the classic citywide special?",
        answers: ["A shot of Rock and Rye dumped into a pint of Guinness", "A shot of Jim Beam and a can of PBR", "A shot of vodka and a draft HopDevil", "A shot of Patron Silver and Tecate"],
        correctAnswer: "A shot of Jim Beam and a can of PBR",
        imgFile: "assets/images/citywide.jpg"
    },
    {
        question: "What produced sold in East Coast stores first go to a warehouse in Philly to ripen in climate-controlled room?",
        answers: ["Bananas", "Tomatoes", "Avocados", "Apples"],
        correctAnswer: "Bananas",
        imgFile: "assets/images/bananas.jpg"
    },
    {
        question: "Approximately how many murals are in the city of Philadelphia?",
        answers: ["300", "2000", "80", "1300"],
        correctAnswer: "2000",
        imgFile: "assets/images/Muses.jpg"
    },
];

//timer info
var timer;
var clock = 31;

function countDown() {
    clock--;
    $("#timeLeft").html(clock);

    if (clock === 0) {
        clearInterval(timer);
        $("#writeQuestion").html("Out of time!");
        $("#allAnswers").html("The correct answer was: " + quizQuestion[questionNum].correctAnswer);
        setTimeout(nextQuestion, 3000);
        unanswer++;
    };

};

function runClock() {
    timer = setInterval(countDown, 1000);

};

runClock();

//question info
var questionNum = 0;

function printQuestions() {

    $("#writeQuestion").html("<p>" + quizQuestion[questionNum].question + "</p>");

    for (var i = 0; i < quizQuestion[questionNum].answers.length; i++) {
        var makeInput = $(`
            <input 
                type='radio' 
                name='answer' 
                test='test${i}'
                answer='${quizQuestion[questionNum].answers[i]}'
            >
            <span id='writeAnswer${i}'>
                ${quizQuestion[questionNum].answers[i]}
            </span>
            <br />
        `)


        $("#allAnswers").append(makeInput);
        

    }

    $("#allAnswers").append('<input type="submit" value="Submit" class="movedown"></input>')
};

var wins = 0;
var losses = 0;
var unanswer = 0;

function pickedAnswer() {

    $("#target").submit(function (event) {

        if ($('input[name="answer"]:checked').attr("answer") === quizQuestion[questionNum].correctAnswer) {

            $("#writeQuestion").html("Correct!");
            $("#allAnswers").html("<img class='image' src=" + quizQuestion[questionNum].imgFile + ">");
            clearInterval(timer);
            setTimeout(nextQuestion, 3000);
            wins++;

        }
        else {
            $("#writeQuestion").html("Nope!");
            $("#allAnswers").html("The correct answer was: " + quizQuestion[questionNum].correctAnswer);
            clearInterval(timer);
            setTimeout(nextQuestion, 3000);
            losses++;
        }

        event.preventDefault();

    });
};

function nextQuestion() {

questionNum++;

    if (questionNum <= quizQuestion.length - 1) {
        clock = 31;
        runClock();
        $("#allAnswers").html("");
        printQuestions();
    }
    
    else {

        clearInterval(timer);
        $("#writeQuestion").html("All done, heres how you did!");
        $("#allAnswers").html('');
        $("#allAnswers").append("Correct Answers: " + wins + "<br>", ["Incorrect Answers: " + losses + "<br>", "Unanswered: " + unanswer + "<br>"]);
        
        $("#allAnswers").append('<input type="submit" value="Restart" class="movedown"></input>');

        $("#target").submit(function (event) {
            
            reset();
            event.preventDefault();

        });
    }

};

function reset() {
    
    $("#writeQuestion").html('');
    $("#allAnswers").html('');

    clock = 31;
    runClock();

    questionNum = 0;
    printQuestions();

    wins = 0;
    losses = 0;
    unanswer = 0;

    pickedAnswer();

}

printQuestions();
pickedAnswer();
