var expect = require( 'chai' ).expect;
var rooted = require( 'rooted' );
var context = rooted( 'this' ).context;

var otherContext = {
  firstInfo : 'Changed',
  lastInfo  : 'Context'
}

describe( 'Change this context', function() {

  it( 'Should change the context and return the info of another object', function() {
    expect( context.showFullInfo.call( otherContext )).to.equal( 'Changed Context' );
  });

});
