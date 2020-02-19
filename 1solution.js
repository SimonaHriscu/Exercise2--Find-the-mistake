console.log("-> First Solution :");

const findBrokenKeys = (correctArg, arg) => {
    let result = [];
    for (let i = 0; i < correctArg.length; i++) {
      if (arg[i] !== correctArg[i]) {
        if (!result.includes(correctArg[i])) {
          result.push(correctArg[i]);
        }
      }
    }
    return result;
  };

console.log(findBrokenKeys("happy birthday", "hawwy birthday")) 
console.log(findBrokenKeys("starry night", "starrq light"))
console.log(findBrokenKeys("beethoven", "affthoif5")) 