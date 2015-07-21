/* Fix this when used in a method passed as a callback */
var guitarData = {
  brand : 'Music Man',
  price : 3100,
  allInfo : function( cb ) {
    return cb( 'Guitar: ' + this.brand + ' ~> Price: $' + this.price );
  }
};

module.exports = guitarData;
