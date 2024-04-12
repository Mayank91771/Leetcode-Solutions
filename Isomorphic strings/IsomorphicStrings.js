var isIsomorphic = function (s, t) {
  var resObj = {};

  for (i = 0; i < s.length; i++) {
    if (resObj.hasOwnProperty(s[i])) {
      if (resObj[s[i]] == t[i]) {
        continue;
      } else {
        return false;
      }
    } else {
      for (let j in resObj) {
        if (resObj[j] == t[i]) {
          return false;
        }
      }
      resObj[s[i]] = t[i];
    }
  }

  return true;
};
