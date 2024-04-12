var isAcronym = function (words, s) {
  if (words.length < s.length) {
    return false;
  }

  resStr = "";
  for (i = 0; i < words.length; i++) {
    resStr += words[i][0];
  }
  return resStr === s ? true : false;
};
