var maxDepth = function (s) {
  openingParanthesisCount = 0;
  maxOpeningParanthesis = 0;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] == "(") {
      openingParanthesisCount++;
      if (maxOpeningParanthesis < openingParanthesisCount)
        maxOpeningParanthesis++;
    } else if (s[i] == ")") openingParanthesisCount--;
  }

  return maxOpeningParanthesis;
};
