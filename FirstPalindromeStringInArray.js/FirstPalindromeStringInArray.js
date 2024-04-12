var firstPalindrome = function (words) {
  if (words.length <= 0) {
    return "";
  }
  let counter = 0;

  for (let i in words) {
    var wordArr = words[i].split("").reverse().join("");
    if (words[i] == wordArr) {
      return wordArr;
    }
  }

  if (counter == 0) {
    return "";
  }
};
