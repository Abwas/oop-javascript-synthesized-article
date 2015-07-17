// Require our dependencies
var expect   = require( 'chai' ).expect;
var showBook = require( '../../variable-scope/function-level-scope' );

describe( 'Function-level scope', function() {
  
  it( "Should return the book's name assigned inside the function", function() {
    expect( showBook() ).to.equal( 'Speaking JavaScript' );
  });

});

