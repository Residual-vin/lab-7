'use strict'
function unique(array) {
	const result = []
	for (const item of array) {
		if (!result.includes(item)) {
			result.push(item)
		}
	}
	return result
}
const numbers = [2, 1, 1, 3, 2]
const result = unique(numbers)
console.log(result)
const words = ['top', 'bottom', 'top', 'left']
console.log(unique(words))
