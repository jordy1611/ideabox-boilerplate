var menuButton = document.querySelector(".menu-button");
var filterStarredArea = document.querySelector(".filter-starred-area");
var ideaCardSection = document.querySelector(".idea-card-section");
var inputForm = document.querySelector("form");
var menuOpenIcon = document.querySelector("#menu-open-icon");
var saveCardButton = document.querySelector(".save-card-button");
var inputTitle = document.querySelector("#idea-title-text");
var inputBody = document.querySelector("#idea-body-text");

var savedCards = [];

menuButton.addEventListener("click", toggleDropDownMenu);
saveCardButton.addEventListener("click", savedIdeaCard);
inputTitle.addEventListener("keyup", enableSaveButton);
inputBody.addEventListener("keyup", enableSaveButton);
ideaCardSection.addEventListener("click", deleteCard);
ideaCardSection.addEventListener("click", favoriteCard);

function toggleDropDownMenu() {
  filterStarredArea.classList.toggle("show-dropdown");
  ideaCardSection.classList.toggle("opacity");
  inputForm.classList.toggle("opacity");
  if (filterStarredArea.classList.contains("show-dropdown")) {
    menuOpenIcon.src = "assets/menu-close.svg";
  } else {
    menuOpenIcon.src = "assets/menu.svg";
  }
}

function enableSaveButton() {
  if (inputTitle.value && inputBody.value) {
  saveCardButton.disabled = false;
 }
}

function makeNewCard() {
  var newCard = new Idea(inputTitle.value, inputBody.value);
  for (var i = 0; i < savedCards.length; i++) {
    var card = savedCards[i];
    if (card.title === newCard.title && card.body === newCard.body) {
      alert("This idea already exists!");
      return;
    }
  }
  savedCards.push(newCard)
}

function clearText() {
  inputTitle.value = "";
  inputBody.value = "";
  saveCardButton.disabled = true;
}

function savedIdeaCard(event) {
  event.preventDefault();
  makeNewCard();
  clearText()
  addToCardSection();
}

function addToCardSection () {
  ideaCardSection.innerHTML = "";
  for (var i = 0; i < savedCards.length; i++) {
  var cardTemplate = `<section class="idea-card-individual ${i}">
      <header class="card-top">
         <button class="star-button"></button>
         <button class="delete-button"><img class="delete-icon ${i}" src="assets/delete.svg" alt="delete"></button>
      </header>
      <h3 class="idea-header-text">${savedCards[i].title}</h3>
      <p class="idea-card-text">${savedCards[i].body}</P>
      <footer class= "card-bottom">
         <img class="comment-icon" src="assets/comment.svg" alt="comment">
         <p class="comment-text"> Comment </p>
      </footer>
    </section>`;
   ideaCardSection.insertAdjacentHTML("afterbegin", cardTemplate);
  }
}

function deleteCard(event) {
  if (event.target.classList[0] === "delete-icon") {
    var index = event.target.classList[1]
    savedCards.splice(index, 1);
    addToCardSection();
  }

function favoriteCard(event) {
  if (event.target.classList.contains("star-button")) {
    event.target.classList.toggle("star-button-active");
     }
   }
 }
