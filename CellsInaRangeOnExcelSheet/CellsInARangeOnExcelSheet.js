var cellsInRange = function (s) {
  var finalOutputArr = [];
  var sArr = s.split("");
  firstChar = sArr[0].charCodeAt(0);
  lastChar = sArr[3].charCodeAt(0);
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
