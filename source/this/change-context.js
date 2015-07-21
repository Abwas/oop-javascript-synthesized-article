var context = {
  firstInfo    : 'Original first info',
  lastInfo     : 'Original last info',
  showFullInfo : showFullInfo
};

function showFullInfo() {
  return this.firstInfo + ' ' + this.lastInfo;
};

module.exports = context;
