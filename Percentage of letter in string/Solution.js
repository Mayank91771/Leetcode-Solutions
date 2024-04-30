var percentageLetter = function (s, letter) {
  var counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == letter) counter++;
  }

  return Math.floor((counter / s.length) * 100);
};
