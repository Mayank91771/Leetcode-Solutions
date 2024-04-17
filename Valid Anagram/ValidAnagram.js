var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let newString = s.split("");

  for (let i = 0; i <= t.length; i++) {
    for (let j = 0; j <= newString.length; j++) {
      if (t[i] == newString[j]) {
        newString.splice(j, 1);
        break;
      }
    }
  }

  if (newString.length == 0) {
    return true;
  } else {
    return false;
  }
};
