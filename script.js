//get the modal elements
//create click events
let modal = document.getElementById("johnTrivia");
let beginGame = document.getElementById("beginGame");
let closeBtn = document.getElementsByClassName("closeBtn")[0];
beginGame.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
  location.reload();
}

// let innerMod = document.getElementsByClassName("modal-content")
// let pie = innerMod[0].innerText
// console.log(pie)
// for (x = 0; x < 1; x ++){
// document.write(pie[x])
// }




//creating questions for John Travolta Trivia
// const johnTQuestions = [
//   {
//     question:
//       "John Travolta starred in this 2007 classic. What is the name of this movie?",
//     choices: ["Grease", "Wild Hogs", "Hairspray", "Highschool Musical"],
//     correctAnswer: "Hairspray"
//   },
//   {
//     question:
//       "What is the name of the character that John Travolta played in Saturday Night fever?",
//     choices: ["Tony", "Rick", "John", "Pickle"],
//     correctAnswer: "Tony"
//   },
//   {
//     question:
//       "John Travolta plays Ryder in The Taking of Pelham 123. One of his famous lines from the movie is 'You live, you die, you either go with the current or you fight it, but you all end up in the same ...' Finish this quote.",
//     choices: ["boat", "pickle", "place", "don't know"],
//     correctAnswer: "place"
//   },
//   {
//     question: "Name this movie",
//     choices: [
//       "Dirty Dancing",
//       "Non-pulp fiction",
//       "Men In Black",
//       "Pulp Fiction"
//     ],
//     correctAnswer: "Pulp Fiction"
//   }
// ];
// //creating the first question
// for (q = 0; q < johnTQuestions.length; q ++){
// let questionOne = document.createElement("DIV");
// let questionText = document.createTextNode(johnTQuestions[q].question);
// questionOne.appendChild(questionText);
// document.getElementById("content").appendChild(questionOne);
// }

// for (let i = 0; i < johnTQuestions.length; i ++){
// let choicesOne = document.createElement("INPUT");
// choicesOne.type = "radio";
// choicesOne.value = `${johnTQuestions[i].correctAnswer}`;
// let choicesText = document.createTextNode(johnTQuestions[i].choices);
// choicesOne.appendChild(choicesText);
// document.getElementById("content").appendChild(choicesOne);
// }
