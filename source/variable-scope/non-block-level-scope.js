// Declares a global variable "guitar"
var guitar = 'Ibanez';

// Using the `var` keyword, we do not have a block-level scope
if ( guitar ) {
  // Will reassign the global guitar variable with this new value
  var guitar = 'Music Man';

  // Exports a property to be used by others parts of our application
  exports.innerGuitar = guitar;
}

exports.outerGuitar = guitar;
