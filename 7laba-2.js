'use strict'
function removeElement(array, item) {
	const index = array.indexOf(item)
	if (index !== -1) {
		array.splice(index, 1)
	}
}
function removeElements(array, ...items) {
	for (const item of items) {
		removeElement(array, item)
	}
}
const numbers = [1, 2, 3, 4, 5, 6, 7]
removeElements(numbers, 5, 1, 6)
console.log(numbers)
const cities = ['Kyiv', 'Beijing', 'Lima', 'Warsaw']
removeElements(cities, 'Lima', 'Berlin', 'Kyiv')
console.log(cities)
