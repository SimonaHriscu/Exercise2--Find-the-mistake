console.log("-> Third Solution :");

function findBrokenKeys(str1, str2) {
	return [...new Set(str1.split("").filter((a, index) => a !== str2[index]))];
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));