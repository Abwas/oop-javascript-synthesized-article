// Require our dependencies
var expect   = require( 'chai' ).expect;
var rooted   = require( 'rooted' );
var showBook = rooted( 'variable-scope' ).showBook;

describe( 'Function-level scope', function() {
  
  it( "Should return the book's name assigned inside the function", function() {
    expect( showBook() ).to.equal( 'Speaking JavaScript' );
  });

});

