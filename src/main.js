var menuButton = document.querySelector(".menu-button");
var filterStarredArea = document.querySelector(".filter-starred-area");
var ideaCardSection = document.querySelector(".idea-card-section");
var inputForm = document.querySelector("form");
var menuOpenIcon = document.querySelector("#menu-open-icon");
// var saveCardButton = document.querySelector(".save-card-button");
// var inputTitle = document.querySelector("#idea-title-text");
// var inputBody = document.querySelector("#idea-body-text");
// var cardTitle = document.querySelector(".idea-header-text");
// var cardBody = document.querySelector(".idea-card-text");
// var ideaCardSection = document.querySelector(".idea-card-section");



// var storedTitles = []; rename!!!
// var storedBody = []; rename!!!

// var savedCards = [];

// var newCard =;


menuButton.addEventListener("click", toggleDropDownMenu);
// saveCardButton.addEventListener("click", saveCard);

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

// Each idea should be created as an object instance of the Idea class. (See idea.js tab)
// Once an idea object is created, all that data can be used to update the DOM.
// This should probably be a global variable in your main.js.
// That object should also be added to a list of all the ideas your application currently has.
// possible functions for pushing user's title and body to arrays?:

// pseudocoded function for this iteration ------
 // saveCard() {
 //   make new card from user's input:
//  function showNewCard(event) {
//   event.preventDefault();
//   newCard = new Idea (inputTitle.value, inputBody.value);
//   cardTitle.innerText = inputTitle.value;
//   cardBody.innerText = inputBody.value;
// }
 //
 // empty text input fields:
//  function clearText()
// {
//     inputTitle.value = "";
//     inputBody.value = "";
// }

 //   if either input is empty, disable "save" button w lighter color and diff cursor than pointer when hover
 // function validateInputs() {
 //   if (inputTitle.value && inputBody.value)
 //     saveCardButton.disabled = false;
 //   else
 //     saveCardButton.disabled = true;
 // }


 //   ---no page reload!!



 // function noDuplicateCards() {
 //   for (var i = 0; i < savedCards.length; i++) {
 //     if(savedCards[i].id === currentCard.id) {
 //       return false;
 //     }
 //   }
 //   return true;
 // }
 //
 // function storeCard() {
 //   storedTitles.push(inputTitle).value;
 //   storedBody.push(inputBody).value;
 //   if(noDuplicateCards()) {
 //     savedCards.push(newCard);
 //   }
 // }
 // }

 function addToCardSection() {
  if(savedCards.length != 0) {
    for (var i = 0; i < savedCards.length; i++) {
      ideaCardSection.insertAdjacentHTML("afterbegin", `
         <div class="mini-poster" data-id=${savedCards[i].id}>
          <h3>${savedCards[i].title}</h3>
          <p>${savedCards[i].body}</p>
         </div>`);
    }
  }
}

function deleteCard(event) {
  if (event.target.closest(".mini-poster")) {
    var cardToDeleteHTML = event.target.closest(".mini-poster");
    for (var i = 0; i < savedCards.length; i++) {
      if (savedCards[i].id == cardToDeleteHTML.dataset.id) {
        savedPosters.splice(savedCards[i], 1);
        ideaCardSection.innerHTML = "";
      }
    }
  }
}
