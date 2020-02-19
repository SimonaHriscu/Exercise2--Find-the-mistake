console.log("-> Second Solution :");

function findBrokenKeys(correct, wrong) {
    let wrongLetters = [];
    for (let i = 0; i < wrong.length; i++) {
      if (!correct.includes(wrong[i])) {
        wrongLetters.push(correct[i]);
      }
    } return [... new Set(wrongLetters)];
  }

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"))