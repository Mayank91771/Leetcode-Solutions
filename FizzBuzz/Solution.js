var fizzBuzz = function (n) {
  var resArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) resArr.push("FizzBuzz");
    else if (i % 5 == 0) resArr.push("Buzz");
    else if (i % 3 == 0) resArr.push("Fizz");
    else resArr.push(i.toString());
  }

  return resArr;
};
