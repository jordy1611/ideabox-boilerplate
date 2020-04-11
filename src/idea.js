class Idea {
  constructor(title, body) {
    this.id = Date.now;
    this.title = title;
    this.body = body;
    this.star = false;
  }

  saveToStorage() {
  }

  deleteFromStorage() {
  }

  updateIdea() {
  }
}



// 1. An `idea.js` file that contains an `Idea` class.
//   * `Idea` methods must include, but are not limited to:
//     1. `constructor`
//     2. `saveToStorage` (should only have one job which is to save the instance to storage)
//     3. `deleteFromStorage`
//     4. `updateIdea` (should be able to update the idea’s title, body, or starred state)

// //  idea has an id, title, body, and star.
// The id should be a unique identifier. (Note: generating a random number does NOT guarantee it will be unique)
// title and body are strings
