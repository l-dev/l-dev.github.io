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
