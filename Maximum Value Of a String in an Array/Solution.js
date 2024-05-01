var maximumValue = function (strs) {
  let lenArr = [];
  let numericRegex = /^[0-9]+$/;
  for (let i = 0; i < strs.length; i++) {
    numericRegex.test(strs[i])
      ? lenArr.push(+strs[i])
      : lenArr.push(strs[i].length);
  }
  return Math.max(...lenArr);
};
