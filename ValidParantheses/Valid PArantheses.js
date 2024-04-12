var isValid = function (s) {
  let charactersObj = { "(": ")", "{": "}", "[": "]" };
  let stackArr = [];
  for (var i = 0; i <= s.length; i++) {
    if (charactersObj[s[i]]) {
      stackArr.push(s[i]);
    } else if (charactersObj[stackArr.pop()] !== s[i]) {
      return false;
    }
  }
  return stackArr.length == 0;
};
