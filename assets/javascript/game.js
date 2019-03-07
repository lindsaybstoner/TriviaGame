//global variables
var quizQuestion = [
    {
        question: "What does Schuylkill mean?",
        answers: ["Old black water", "Turtle crossing place", "Place not to drink from", "Hidden river"],
        correctAnswer: "Hidden river"
    },
    {
        question: "What motto is engraved on the liberty bell?",
        answers: ["The tree of liberty must be refreshed with the blood of the patriots and tyrants", "Proclaim liberty throughout all the land unto all inhabitants thereof", "This be the liberty belle", "Give me liberty or give me death"],
        correctAnswer: "Proclaim liberty throughout all the land unto all inhabitants thereof"
    },
    {
        question: "Which of these Philly institutions was not the first of its kind in the nation?",
        answers: ["The Philadelphia zoo", "The Philadelphia orchestra", "The Philadelphia stock exchange", "Pennsylvania hospital"],
        correctAnswer: "The Philadelphia orchestra"
    },
    {
        question: "Which of the following does appear on the seal of Philadelphia?",
        answers: ["A disembodied arm", "A whale", "A sailing ship", "Two women"],
        correctAnswer: "A sailing ship"
    },
    {
        question: "If I say meet me at the eagle, where should you show up?",
        answers: ["On the main quad at Penn", "At the zoo", "At Lincoln financial field", "At the center city Macy’s"],
        correctAnswer: "At the center city Macy’s"
    },
    {
        question: "What is the classic citywide special?",
        answers: ["A shot of Rock and Rye dumped into a pint of Guinness", "A shot of Jim Beam and a can of PBR", "A shot of vodka and a draft HopDevil", "A shot of Patron Silver and Tecate"],
        correctAnswer: "A shot of Jim Beam and a can of PBR"
    },
    {
        question: "What produced sold in East Coast stores first go to a warehouse in Philly to ripen in climate-controlled room?",
        answers: ["Bananas", "Tomatoes", "Avocados", "Apples"],
        correctAnswer: "Bananas"
    },
    {
        question: "On average how many murals are in the city of Philadelphia?",
        answers: ["300", "2000", "80", "1300"],
        correctAnswer: "2000"
    },
];

//timer info
var timer;
var clock = 180;

function countDown() {
    clock--;
    $("#timeLeft").html(clock);

    if (clock === 0) {
        $("#timeLeft").append("Times up!")
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
    $("#writeAnswer1").html("<p>" + quizQuestion[questionNum].answers[0] + "</p>");
    $("#writeAnswer2").html("<p>" + quizQuestion[questionNum].answers[1] + "</p>");
    $("#writeAnswer3").html("<p>" + quizQuestion[questionNum].answers[2] + "</p>");
    $("#writeAnswer4").html("<p>" + quizQuestion[questionNum].answers[3] + "</p>");
//make them input tags not p tags

};

printQuestions();

/* for (var i = 0; i < quizQuestion.length; i++) {
        $("#writeQuestions").html("<p>" + quizQuestion[i].question + "</p>");
        //make an id for each of the quiz questions within the <p> need to do more canatination

        for (var j = 0; j < quizQuestion[i].answers; j++) {
             < form >
                <input type="radio" name="" value="male">
                    <input type="radio" name="gender" value="female">
                        <input type="radio" name="gender" value="other">
                            <input type="submit" value="Submit">
                            </form> 
        }
    }  */