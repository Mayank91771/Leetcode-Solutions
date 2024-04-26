/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let sArr = [];

  for (let i = 0; i < s.length; i++) {
    if (i >= 2 && sArr[i - 1] == s[i] && sArr[i - 2] == s[i + 1]) {
      sArr.pop(i - 1);
      sArr.pop(i - 2);
      i++;
    } else {
      sArr.push(s[i]);
    }
  }

  return sArr.join("");
};
