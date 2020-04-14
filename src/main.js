var menuButton = document.querySelector(".menu-button");
var filterStarredArea = document.querySelector(".filter-starred-area");
var ideaCardSection = document.querySelector(".idea-card-section");
var inputForm = document.querySelector("form");
var menuOpenIcon = document.querySelector("#menu-open-icon");
var saveCardButton = document.querySelector(".save-card-button");
var inputTitle = document.querySelector("#input-title-text");
var inputBody = document.querySelector("#input-body-text");
var overlay = document.querySelector(".overlay");
var savedCards = [];

window.onload = retrieveCardsFromStorage();
menuButton.addEventListener("click", toggleDropDownMenu);
saveCardButton.addEventListener("click", savedIdeaCardHandler);
inputTitle.addEventListener("keyup", enableSaveButton);
inputBody.addEventListener("keyup", enableSaveButton);
ideaCardSection.addEventListener("click", clickCardHandler);


function toggleDropDownMenu() {
  filterStarredArea.classList.toggle("show-dropdown");
  overlay.classList.toggle("hidden");
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
  savedCards.push(newCard);
  newCard.saveToStorage(savedCards);
}

function clearText() {
  inputTitle.value = "";
  inputBody.value = "";
  saveCardButton.disabled = true;
}

function addToCardSection () {
  ideaCardSection.innerHTML = "";
  for (var i = 0; i < savedCards.length; i++) {
    var buttonPress = savedCards[i].star ? "star-button-active" : "star-button";
    var cardTemplate =
      `<section class="idea-card-individual">
      <header class="card-top">
      <button class=${buttonPress} id="${i}"></button>
      <button class="delete-button"><img class="delete-icon ${i}" src="assets/delete.svg" alt="delete"></button>
      </header>
      <h3 class="idea-header-text">${savedCards[i].title}</h3>
      <p class="idea-card-text">${savedCards[i].body}</P>
      <footer class= "card-bottom">
      <img class="comment-icon" src="assets/comment.svg" alt="comment">
      <p class="comment-text">Comment</p>
      </footer>
      </section>`;
    ideaCardSection.insertAdjacentHTML("afterbegin", cardTemplate);
  }
}

function savedIdeaCardHandler(event) {
  event.preventDefault();
  makeNewCard();
  clearText();
  addToCardSection();
}

function deleteCard(event) {
  var index = event.target.classList[1];
  var removedCard = savedCards.splice(index, 1)[0];
  removedCard.deleteFromStorage(removedCard.id);
}

function favoriteCard(event) {
  event.target.classList.toggle("star-button-active");
  event.target.classList.toggle("star-button");
  var id = parseInt(event.target.id);
  savedCards[id].star = !savedCards[id].star;
  savedCards[id].updateIdea(savedCards[id].id);
}

function clickCardHandler(event) {
  event.preventDefault();
  if (event.target.classList.contains("delete-icon")) {
    deleteCard(event);
    addToCardSection();
  }
  if (event.target.classList.contains("star-button") ||
    event.target.classList.contains("star-button-active")) {
    favoriteCard(event);
  }
}

function retrieveCardsFromStorage() {
  savedCards = JSON.parse(localStorage.getItem("savedCardsToStorage")) || [];
  for (var i = 0; i < savedCards.length; i++) {
     savedCards[i] = new Idea(savedCards[i].title, savedCards[i].body, savedCards[i].star, savedCards[i].id);
  }
  addToCardSection();
}
