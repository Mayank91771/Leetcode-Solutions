var countPrefixes = function (words, s) {
  var sArr = s.split("");
  var counter = 0;
  for (let i = 0; i < words.length; i++) {
    var word = words[i];
    var flag = true;
    for (let j = 0; j < word.length; j++) {
      if (word[j] != sArr[j]) {
        flag = false;
        break;
      }
    }
    if (flag) counter++;
  }

  return counter;
};
