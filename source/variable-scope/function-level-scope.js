/* Function-level scope */

// Declares a variable book in the global-level scope
var book = 'Exploring ES6';

function showBook() {
  // Declares a variable book in the function-level scope
  var book = 'Speaking JavaScript';

  return book;
}

// Exports the function showBook to be consumed in others parts of our application
module.exports = showBook;
