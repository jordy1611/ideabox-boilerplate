class Idea {
  constructor(title, body, star, id) {
    this.title = title;
    this.body = body;
    this.star = star || false;
    this.id = id || Date.now();
  }
<<<<<<< HEAD

  saveToStorage(savedCards) {
    localStorage.setItem("savedCardsToStorage", JSON.stringify(savedCards));
  }

=======
​
  saveToStorage(savedCards) {
    localStorage.setItem("savedCardsToStorage", JSON.stringify(savedCards));
  }
​
>>>>>>> master
  deleteFromStorage(id) {
    var savedCardsFromStorage = JSON.parse(localStorage.getItem("savedCardsToStorage"));
    var filteredCards = savedCardsFromStorage.filter(function(idea) {
      return idea.id != id;
    } )
    localStorage.setItem("savedCardsToStorage", JSON.stringify(filteredCards));
  }
<<<<<<< HEAD

=======
​
>>>>>>> master
  updateIdea(id) {
    var savedCardsFromStorage = JSON.parse(localStorage.getItem("savedCardsToStorage"));
    savedCardsFromStorage.forEach((item, i) => {
      if (item.id === id) {
        item.star = !item.star;
      }
    });
    localStorage.setItem("savedCardsToStorage", JSON.stringify(savedCardsFromStorage));
  }
<<<<<<< HEAD

=======
​
>>>>>>> master
}
