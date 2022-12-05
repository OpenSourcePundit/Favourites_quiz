var readlineSync = require('readline-sync');
var score = 0;
var bestUser = {
  name: "Shashank",
  score: 0
}
var ques = [{
  no: "First",
  question: "Where was Shashank born? ",
  answer: "varanasi"
}, {
  no: "Second",
  question: "Where does Shashank Live? ",
  answer: "ghaziabad"
}, {
  no: "Third",
  question: "What is Shashank's age? ",
  answer: "27"
}, {
  no: "Fourth",
  question: "Is Shashank a graduate? ",
  answer: "yes"
}, {
  no: "Fifth",
  question: "Is Shashank from Science stream or from Arts stream ? ",
  answer: "science"
}
]

var userName = readlineSync.question("Lets see how well you know Shashank.What is your name ?  ");
console.log("Hi ! " + userName + " Lets Play");

for (i = 0; i < ques.length; i++) {
  console.log(" ");
  console.log("Lets go for " + ques[i].no + " Question:");
  var userAnswer = readlineSync.question(ques[i].question);

  if (userAnswer.toUpperCase() == ques[i].answer.toUpperCase()) {
    score++;
    console.log("Yes!!," + userName + "! you are Right. Moving on...")
  }
  else {
    console.log("Oopss!! " + userName + "!! Its a worng answer.Correct answer is " + ques[i].answer + ".Moving on...")
  }
}
console.log(" ");
console.log("Quiz is completed. Your final score is " + score);
if (bestUser.score <= score) {
  console.log("HURRRAAAHHH !! " + userName + " You know Shashank the BEST !")
  bestUser.score = score;
  bestUser.name = userName;
}
else {
  console.log(bestUser.name + " knows Shashank the best with a Score of " + bestUser.score);
}
