var cellsInRange = function (s) {
  var finalOutputArr = [];
  var sArray = s.split("");
  firstChar = sArray[0].charCodeAt(0);
  lastChar = sArray[3].charCodeAt(0);
  firstCellNumber = s[1];
  lastCellNumber = s[4];

  for (i = firstChar; i <= lastChar; i++) {
    var convertedChar = String.fromCharCode(i);
    for (j = firstCellNumber; j <= lastCellNumber; j++) {
      finalOutputArr.push(convertedChar + j);
    }
  }

  return finalOutputArr;
};
