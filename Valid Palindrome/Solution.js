var isPalindrome = function (s) {
  var lowerCaseString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return lowerCaseString.split("").reverse().join("") === lowerCaseString
    ? true
    : false;
};
