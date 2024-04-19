var wordPattern = function (pattern, s) {
  let resObj = {};
  let sArr = s.split(" ");

  for (let i in sArr) {
    if (resObj.hasOwnProperty(`${pattern[i]}`)) {
      if (resObj[`${pattern[i]}`] != sArr[i]) {
        return false;
      }
    } else {
      resObj[pattern[i]] = sArr[i];
    }
  }

  // for(let i in sArr)
  // {
  //     if(!resObj.hasOwnProperty(`${pattern[i]}`))
  //     {
  //         for(let key in resObj)
  //         {
  //             if(resObj.hasOwnProperty(`${pattern[i]}`) && resObj[key] == sArr[i])
  //             {
  //                 return false;
  //             }
  //         }
  //         resObj[pattern[i]] = sArr[i];
  //     }
  // }

  let set = new Set();
  for (let i in resObj) {
    if (!set.has(resObj[i])) set.add(resObj[i]);
    else return false;
  }

  return true;
};
