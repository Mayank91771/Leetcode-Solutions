var kthDistinct = function (arr, k) {
  let count = 0;
  let distinct = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count === 1) {
      distinct++;
      if (distinct === k) {
        return arr[i];
      }
    }
    count = 0;
  }
  return "";
};
