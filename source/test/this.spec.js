var expect = require( 'chai' ).expect;
var rooted = require( 'rooted' );

var otherContext = {
  firstInfo : 'Changed',
  lastInfo  : 'Context'
}

describe( 'Change this context', function() {

  var that    = rooted( 'this' );
  var context = that.context;

  it( 'Should change the context and return the info of another object', function() {
    expect( context.showFullInfo.call( otherContext )).to.equal( 'Changed Context' );
  });

});

describe( 'Fix this in a callback', function() {

  var that       = rooted( 'this' );
  var guitarData = that.guitarData;

  it( 'Should bind this to the callback context', function( done ) {
    var text;

    setTimeout( guitarData.allInfo( function( txt ) {
      text = txt;
      done();
    }), 300 );

    expect( text ).to.equal( 'Guitar: Music Man ~> Price: $3100' );
  });

});
