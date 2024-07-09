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

function FindSumPair(array) {
  let left = 0;
  let right = array.length-1;

  while(left < right) {
    sum=array[left] + array[right];
    if(sum === 0) {
      return [array[left], array[right]];
    } else if(sum > 0)
    {
      right--;
    } else {
      left++;
    }
  }
}

FindSumPair([-5,-4,-3,-2,0,2,4,6,8])