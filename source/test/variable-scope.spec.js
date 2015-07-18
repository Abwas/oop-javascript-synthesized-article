// Require our dependencies
var expect        = require( 'chai' ).expect;
var rooted        = require( 'rooted' );
var variableScope = rooted( 'variable-scope' );
var showBook      = variableScope.showBook;
var innerGuitar   = variableScope.innerGuitar;
var outerGuitar   = variableScope.outerGuitar;

describe( 'Function-level scope', function() {
  
  it( "Should return the book's name assigned inside the function", function() {
    expect( showBook() ).to.equal( 'Speaking JavaScript' );
  });

});

describe( 'Non-block-level scope', function() {

  it( 'Should return the same value for inner and outer variables', function() {
    expect( innerGuitar ).to.equal( outerGuitar );
  });

});
