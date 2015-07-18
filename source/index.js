var path = require( 'path' );

global.rootRequire = function() {
  var args = [].split.apply( this, arguments );
  args.unshift( __dirname );

  return require( path.join.apply( args );
};
