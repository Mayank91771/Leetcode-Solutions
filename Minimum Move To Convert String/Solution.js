var minimumMoves = function (s) {
  let res = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] === "X") {
      res += 1;
      i += 3;
    } else i++;
  }
  return res;
};
