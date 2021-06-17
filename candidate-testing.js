const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer ="";
let questions = [ 
"1) Who was the first American woman in space? ",
"2) True or false: 5 kilometer == 5000 meters? ",//this questions is reversed in the report
"3) (5 + 3)/2 * 10 = ? ",
"4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"5) What is the minimum crew size for the ISS? " 
];

let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];//may not use this
//let correctAnswerCount = 0;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question ("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 //lines38-39 from starter code
/*candidateAnswer = input.question (question);
console.log (candidateAnswer);
*/

// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*for all the questions above, ask each question and store the answer in candidateAnswers. May need to be an array, or may not*/
//next line loops through the questions
for (let i=0; i<questions.length; i++){
//next line asks the questions and puts the user answer into candidateAnswer, but I need it to be in an array
candidateAnswer = input.question (questions[i]);
candidateAnswers.push(candidateAnswer);
  console.log (`Your Answer: ${candidateAnswer}`);
  console.log (`Correct Answer: ${correctAnswers[i]} \n` );
 
//console.log(candidateAnswers);//this works to store the answers in an array!!
//check to see if it's correct:

 //no else statement needed
 // let grade = (correctAnswerCount/10)*100;
  //console.log (`Your current score is: ${grade}`);

}
//return grade;
}


function gradeQuiz(candidateAnswers){
let grade = 0;
let correctAnswerCount = 0;
for (let i=0; i<questions.length; i++){
if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()){
correctAnswerCount++;
 }
 
}

grade = (correctAnswerCount/questions.length)*100;
  //try this with the return grade value. runProgram calls grade quiz
console.log (`>>> Overall Grade: ${grade}% (${correctAnswerCount} of 5 responses correct) <<<`);

if (grade >= 80){
  console.log(">>> Status: PASSED <<<");
}
  else{
  console.log(">>> Status: FAILED <<<");
  }




return grade;

}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log (`Candiate Name: ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};