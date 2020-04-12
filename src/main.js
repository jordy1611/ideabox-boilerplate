var menuButton = document.querySelector(".menu-button");
var filterStarredArea = document.querySelector(".filter-starred-area");
var ideaCardSection = document.querySelector(".idea-card-section");
var inputForm = document.querySelector("form");
var menuOpenIcon = document.querySelector("#menu-open-icon");

var saveCardButton = document.querySelector(".save-card-button");
var inputTitle = document.querySelector("#idea-title-text");
var inputBody = document.querySelector("#idea-body-text");
var cardTitle = document.querySelector(".idea-header-text");
var cardBody = document.querySelector(".idea-card-text");
var ideaCardSection = document.querySelector(".idea-card-section");



var storedTitles = [];
var storedBody = [];

var savedCards = [];

var newCard;


menuButton.addEventListener("click", toggleDropDownMenu);
saveCardButton.addEventListener("click", savedIdeaCard);
inputTitle.addEventListener("keyup", enableSaveButton);
inputBody.addEventListener("keyup", enableSaveButton);


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
  } else {
  saveCardButton.disabled = true;
  }
}

function makeNewCard(event) {
  cardTitle.innerText = inputTitle.value;
  cardBody.innerText = inputBody.value;
  newCard = new Idea(inputTitle.value, inputBody.value);
  storeCard();
}

function noDuplicateCards() {
  for (var i = 0; i < savedCards.length; i++) {
    if(savedCards[i].id === newCard.id) {
      return false;
    }
  }
  return true;
}

function storeCard() {
  storedTitles.push(inputTitle.value);
  storedBody.push(inputBody.value);
  if(noDuplicateCard()) {
    savedCards.push(newCard);
  }
}

function clearText() {
  inputTitle.value = "";
  inputBody.value = "";
  saveCardButton.disabled = true;
}

function savedIdeaCard(event) {
  event.preventDefault();
  makeNewCard();
  clearText();
  addToCardSection();
}

function addToCardSection() {
  if(savedCards.length != 0) {
    for (var i = 0; i < savedCards.length; i++) {
      ideaCardSection.insertAdjacentHTML("afterbegin", `
      <div class="user-card" data-id=${savedCards[i].id}>
      <h3>${savedCards[i].title}</h3>
      <p>${savedCards[i].body}</p>
      </div>`);
    }
  }
}



      // function deleteCard(event) {
        //   if (event.target.closest(".mini-poster")) {
          //     var cardToDeleteHTML = event.target.closest(".mini-poster");
          //     for (var i = 0; i < savedCards.length; i++) {
            //       if (savedCards[i].id == cardToDeleteHTML.dataset.id) {
              //         savedPosters.splice(savedCards[i], 1);
              //         ideaCardSection.innerHTML = "";
              //       }
              //     }
              //   }
              // }

//   ---no page reload!! localStorage?
// That object should also be added to a list of all the ideas your application currently has.
