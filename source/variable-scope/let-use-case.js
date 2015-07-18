/*
 * @desc Create an array with odd numbers
 * @param {Number} min - start to iterate by this number
 * @param {Number} max - stop to iterate by this number
 * @return {Array} array with odd numbers
 */

function checkOddNumbers( min, max ) {
  var oddNumbers = [];

  if ( typeof min !== 'number' || typeof max !== 'number' ) {
    throw new TypeError( 'Just numbers are allowed!' );
  } else if ( min < 0 ) {
    throw new Error( 'The minimum value must be greater than zero' );
  } else if ( max <= min ) {
    throw new Error( 'The maximum value must be greater than the minimum' );
  }
  
  // Look here! Now our `i` variable is in a blocked scope!
  for ( let i = min; min <= max; min += 1 ) {
    if ( min % 2 !== 0 ) {
      oddNumbers
        .push( min );
    }
  }

  return oddNumbers;
}

module.exports = checkOddNumbers;
