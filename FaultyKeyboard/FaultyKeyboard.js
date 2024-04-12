var finalString = function (s) {
  var res = [];
  for (i = 0; i <= s.length; i++) {
    if (s[i] == "i") {
      res.reverse();
    } else {
      res.push(s[i]);
    }
  }
  return res.join("");
};
