// 1. push(): Adds one or more elements to the end of an array.
// 2. pop(): Removes the last element from an array.

const fruits = ['apple', 'banana', 'orange'];

fruits.push('grape'); // Adds 'grape' to the end
fruits.pop(); // Removes 'orange'
console.log(fruits); // Output: ['apple', 'banana']

// 3. unshift(): Adds one or more elements to the beginning of an array.
// 4. shift(): Removes the first element from an array.

const numbers = [2, 3, 4];

numbers.unshift(1); // Adds 1 to the beginning
numbers.shift();    // Removes 1
console.log(numbers); // Output: [2, 3, 4]

// 5. concat(): Combines two or more arrays and returns a new array.

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2); // [1, 2, 3, 4]

// 6. slice(): Returns a new array containing elements from the original array within a specified range.

const colors = ['red', 'blue', 'green', 'yellow'];
const sliced = colors.slice(1, 3); // ['blue', 'green']

// 7. forEach(): Executes a provided function once for each array element.

const numbers = [1, 2, 3];
numbers.forEach(function(number) {
  console.log(number * 2);
});
// Output: 2, 4, 6

// 8. map(): Creates a new array by applying a function to each element of the original array.

const numbers = [1, 2, 3];
const doubled = numbers.map(function(number) {
  return number * 2;
});
// doubled: [2, 4, 6]

// 9. filter(): Creates a new array with elements that pass a test (provided by a function).

const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(function(number) {
  return number % 2 === 0;
});
// even: [2, 4]

// 10. reduce(): Applies a function to each element of the array to reduce it to a single value.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// sum: 15


// 11. sort(): Sorts the elements of an array in place (mutates the original array).

const fruits = ['apple', 'banana', 'orange'];
fruits.sort(); // ['apple', 'banana', 'orange']

// 12. indexOf() and lastIndexOf():
// i. indexOf(): Returns the index of the first occurrence of a specified element in an array.
// ii. lastIndexOf(): Returns the index of the last occurrence of a specified element in an array.

const numbers = [1, 2, 3, 2, 4, 2];
const firstIndex = numbers.indexOf(2); // 1
const lastIndex = numbers.lastIndexOf(2); // 5

// 13. find() and findIndex():
// i. find(): Returns the first element that passes a test (provided by a function).
// ii. findIndex(): Returns the index of the first element that passes a test.

const numbers = [10, 20, 30, 40, 50];
const found = numbers.find(function(number) {
  return number > 25;
}); // 30

const foundIndex = numbers.findIndex(function(number) {
  return number > 25;
}); // 2

// 14. every() and some():
// i. every(): Checks if all elements in an array pass a test (provided by a function).
// ii. some(): Checks if at least one element in an array passes a test.

const ages = [18, 25, 32, 40];
const allAdults = ages.every(function(age) {
  return age >= 18;
}); // true

const hasYoungAdult = ages.some(function(age) {
  return age <= 25;
}); // true

// 15. reverse(): Reverses the order of elements in an array in place.

const letters = ['a', 'b', 'c', 'd'];
letters.reverse(); // ['d', 'c', 'b', 'a']

// 16. includes(): Checks if an array includes a specific element.

const pets = ['dog', 'cat', 'parrot'];
const hasCat = pets.includes('cat'); // true

// 17. join(): Joins all elements of an array into a string using a specified separator.

const colors = ['red', 'green', 'blue'];
const joined = colors.join(', '); // "red, green, blue"

// 18. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1); // Removes 1 element at index 2
// Result: [1, 2, 4, 5]

// 19. isArray: Checks if an object is an array.

const array1 = [1, 2, 3];
const array2 = 'not an array';

console.log(Array.isArray(array1)); // Output: true
console.log(Array.isArray(array2)); // Output: false

// 20. toString: Returns a string representing the array.

const array = [1, 2, 3, 4, 5];

const arrayAsString = array.toString();

console.log(arrayAsString); // Output: "1,2,3,4,5"


// 21. fill: Fills all the elements of an array from a start index to an end index with a static value.

const array = [1, 2, 3, 4, 5];

// Fill the array with a specific value from index 2 to index 4
array.fill(0, 2, 5);

console.log(array); // Output: [1, 2, 0, 0, 0]

// 22. flat: Creates a new array with all sub-array elements concatenated into it recursively up to a specified depth.

const nestedArray = [1, [2, 3], [4, [5, 6]]];

const flattenedArray = nestedArray.flat();

console.log(flattenedArray); // Output: [1, 2, 3, 4, [5, 6]]

// In this example, the flat() function is used to flatten a nested array. The original nestedArray contains sub-arrays at different levels of nesting. When you call flat() on nestedArray, it flattens the array by concatenating sub-arrays at a depth of 1. However, it doesn't recursively flatten sub-arrays at deeper levels. As a result, the sub-array [5, 6] remains intact within the flattened array.

// If you want to flatten the array completely, including all levels of nesting, you can provide the maximum depth as an argument to the flat() function.
const nestedArray = [1, [2, 3], [4, [5, 6]]];

const completelyFlattenedArray = nestedArray.flat(Infinity);

console.log(completelyFlattenedArray); // Output: [1, 2, 3, 4, 5, 6]
// In this second example, by passing Infinity as the argument to flat(), you flatten the array recursively to all levels, resulting in a completely flattened array [1, 2, 3, 4, 5, 6].

// 23. flatMap: Maps each element using a mapping function, then flattens the result into a new array.

const numbers = [1, 2, 3, 4];

const doubledAndSquared = numbers.flatMap(num => [num * 2, num * num]);

console.log(doubledAndSquared); // Output: [2, 1, 4, 4, 6, 9, 8, 16]

// In this example, the flatMap() function is used to first double each number in the numbers array and then square each number. The callback function passed to flatMap() returns an array with two elements: the doubled value and the squared value of each number. The flatMap() function then flattens the resulting array to a single level.