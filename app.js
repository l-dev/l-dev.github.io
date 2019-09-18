//creating questions for John Travolta Trivia
const johnTQuestions = [
  {
    question: "John Travolta starred in this 2007 classic. What is the name of this movie?",
    choices: ["Grease", "Wild Hogs", "Hairspray", "Highschool Musical"],
    correctAnswer: "Hairspray"
  },
  {
    question: "What is the name of the character that John Travolta played in Saturday Night fever?",
    choices: ["Tony", "Rick", "John", "Pickle"],
    correctAnswer: "Tony"
  },
  {
    question: "John Travolta plays Ryder in The Taking of Pelham 123. One of his famous lines from the movie is 'You live, you die, you either go with the current or you fight it, but you all end up in the same ...' Finish this quote.",
    choices: ["boat", "pickle", "place", "don't know"],
    correctAnswer: "place"
  },
  {
    question: "Name this movie",
    choices: ["Dirty Dancing","Non-pulp fiction", "Men In Black","Pulp Fiction"],
    correctAnswer: "Pulp Fiction"
  }
]


//display the prompt in modal

// let score = 0; 

// for (let i = 0; i < johnTQuestions.length; i++){
//     // // let response = document.write(johnTQuestions[i].question);{
//         document.write(johnTQuestions[i].question)
//     }
//         alert ("correct");
//     }else {
//         alert ("wrong");
//     }
// }
// alert ("you got" + score + "/" + johnTQuestions.length)

//keeping score for written in questions on modal
function check(){
let question1 = document.trivia.question1.value;
let question2 = document.trivia.question2.value;
let question3 = document.trivia.question3.value;
let question4 = document.trivia.question4.value;
let correct = 0;

if (question1  == "Hairspray") {
    correct ++;
}
if (question2 == "Tony") {
    correct ++;
}
if (question3 == "place"){
    correct ++;
}
if (question4 == "Pulp Fiction"){
    correct ++;
}

let message = ["Wow, you must really like John Travolta!", "Better luck next time!", "Looks like you hate John Travolta.."];

let numberCorrect;
if (correct < 1){
    numberCorrect = 2;
}
if (correct > 0 && correct < 3){
    numberCorrect = 1;
}
if (correct > 3) {
    numberCorrect = 0;
}
document.getElementById("aftersubmit").style.visibility="visible";

document.getElementById("message").innerHTML = message[numberCorrect];
document.getElementById("number-correct").innerHTML = "You got " + correct + "/4 correct.";
};