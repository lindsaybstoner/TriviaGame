# TriviaGame

All questions were found on https://www.phillymag.com/big-philly-quiz/
description of the problem: create a trivia game that each question is timed and counts up the correct, wrong, or unanswered questions and then displays it at the end
how you solved it/technical approach: I pretty much just used js to populate this page as well with an array that had many objects in it. The objects that held the questions, answer choices, and then the right answer. I would get it to find the position in the array and print out all the relevant info in that specific object that matched the array position. depending on the answer choice matched the hard-coded "right" answer I would push to one increment on of the different variables (correct, wrong, or unanswered). then I rewrote the html to display all the final totals
