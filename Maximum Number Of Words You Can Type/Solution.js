var canBeTypedWords = function (text, brokenLetters) {
  var textArr = text.split(" ");
  var textArrLen = textArr.length;

  for (let i = 0; i < textArr.length; i++) {
    for (let j = 0; j < brokenLetters.length; j++) {
      if (textArr[i].includes(brokenLetters[j])) {
        textArrLen--;
        break;
      }
    }
  }

  return textArrLen;
};
