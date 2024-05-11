var divideString = function (s, k, fill) {
  var sArr = s.split("");
  var numOfFill = s.length % k;
  var fillCount = k - numOfFill;

  if (numOfFill > 0) {
    for (j = 0; j < fillCount; j++) {
      sArr.push(fill);
    }
  }

  var finalArray = [];
  for (i = 0; i < sArr.length; i++) {
    let sum = "";
    for (j = i; j < i + k; j++) {
      sum += sArr[j];
    }

    finalArray.push(sum);
    i += k - 1;
  }

  return finalArray;
};
