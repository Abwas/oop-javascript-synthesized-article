// Require our dependencies
var expect          = require( 'chai' ).expect;
var rooted          = require( 'rooted' );
var variableScope   = rooted( 'variable-scope' );
var showBook        = variableScope.showBook;
var innerGuitar     = variableScope.innerGuitar;
var outerGuitar     = variableScope.outerGuitar;
var checkOddNumbers = variableScope.checkOddNumbers;

describe( 'Function-level scope', function() {
  
  it( "Should return the book's name assigned inside the function", function() {
    expect( showBook() ).to.equal( 'Speaking JavaScript' );
  });

});

describe( 'No Block-level scope', function() {

  it( 'Should return the same value for inner and outer variables', function() {
    expect( innerGuitar ).to.equal( outerGuitar );
  });

});

describe( 'Block level scope', function() {

  it( 'Should throw an TypeError when a non number is passed as an argument', function() {
    expect( checkOddNumbers.bind( checkOddNumbers, '13', 31 )).to.throw( TypeError );
  });

  it( 'Should throw an Error when a number lower than 0 is passed as the min argument', function() {
    expect( checkOddNumbers.bind( checkOddNumbers, -13, 31 )).to.throw( Error );
  });

  it( 'Should throw an Error when min and max arguments are equals', function() {
    expect( checkOddNumbers.bind( checkOddNumbers, 31, 31 )).to.throw( Error );
  });

  it( 'Should return an array with odd numbers', function() {
    expect( checkOddNumbers( 0, 13 )).to.deep.equal([ 1, 3, 5, 7, 9, 11, 13 ]);
  });

});
