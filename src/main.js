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



// var storedTitles = []; rename!!!
// var storedBody = []; rename!!!

var savedCards = [];

var newCard;


menuButton.addEventListener("click", toggleDropDownMenu);
saveCardButton.addEventListener("click", savedIdeaCard);
inputTitle.addEventListener("keyup", enableSaveButton);
inputBody.addEventListener("keyup", enableSaveButton);


// saveCardButton.disabled = true;

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

// function makeNewCard() {
//   var newCard = new Idea(inputTitle.value, inputBody.value);
//   for (var i = 0; i < savedCards.length; i++) {
//     var card = savedCards[i];
//     if (card.title === newCard.title && card.body === newCard.body) {
//       return
//     }
//   }
//   savedCards.push(newCard);
// }

function noDuplicateCards() {
  for (var i = 0; i < savedCards.length; i++) {
    if(savedCards[i].id === newCard.id) {
      return false;
    }
  }
  return true;
}
function storeCard() {
  title.push(inputTitle.value);
  body.push(inputBody.value);
  if(noDuplicateCard()) {
    savedIdeaCard.push(newCard);
  }
}

function clearText() {
  inputTitle.value = "";
  inputBody.value = "";
  saveCardButton.disabled = true;
}

function savedIdeaCard(event) {
  event.preventDefault();
  storeCard();
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

//   if either input is empty, disable "save" button w lighter color and diff cursor than pointer when hover
//   ---no page reload!! localStorage?
// That object should also be added to a list of all the ideas your application currently has.
