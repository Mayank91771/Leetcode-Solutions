var areOccurrencesEqual = function (s) {
  var obj = {};

  for (let i in s) {
    if (!obj.hasOwnProperty(`${s[i]}`)) {
      obj[s[i]] = 1;
    } else {
      obj[`${s[i]}`] += 1;
    }
  }

  let maxCount = obj[s[0]];

  for (let key in obj) {
    if (obj[key] != maxCount) {
      return false;
    }
  }
  return true;
};
