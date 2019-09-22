
//keeping score for written in questions on modal
function check() {
  let question1 = document.trivia.question1.value;
  let question2 = document.trivia.question2.value;
  let question3 = document.trivia.question3.value;
  let question4 = document.trivia.question4.value;
  let question5 = document.trivia.question5.value;
  let question6 = document.trivia.question6.value;
  let question7 = document.trivia.question7.value;
  let correct = 0;

  if (question1 == "Hairspray") {
    correct++;
  }
  if (question2 == "Tony") {
    correct++;
  }
  if (question3 == "place") {
    correct++;
  }
  if (question4 == "Pulp Fiction") {
    correct++;
  }
  if (question5 == "3") {
    correct++;
  }
  if (question6 == "stephen") {
    correct++;
  }
  if (question7 == "true") {
    correct++;
  }
  

  let message = [
    "Wow, you must really like John Travolta!",
    "Better luck next time!",
    "Looks like you hate John Travolta.."
  ];

  let numberCorrect;
  if (correct < 3) {
    numberCorrect = 2;
  }
  if (correct > 3 && correct < 5) {
    numberCorrect = 1;
  }
  if (correct > 6) {
    numberCorrect = 0;
  }
  document.getElementById("aftersubmit").style.visibility = "visible";

  document.getElementById("message").innerHTML = message[numberCorrect];
  document.getElementById("number-correct").innerHTML =
    "You got " + correct + "/7 correct.";
}
