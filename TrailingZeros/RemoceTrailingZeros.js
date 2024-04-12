var removeTrailingZeros = function (num) {
  if (!num.includes("0")) return num;

  let index = 0;
  for (var i = num.length - 1; i >= 0; i--) {
    if (num[i] != 0) {
      index = i;
      break;
    }
  }

  return num.slice(0, index + 1);
};
