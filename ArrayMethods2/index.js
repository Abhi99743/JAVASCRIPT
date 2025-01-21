let nums = [10, 8,  7 ,  20, 30, 40, 50];
console.log(nums);

// perform any oparation onwhile array 
let mapped = nums.map((item) => { return (item * 5) });
console.log("mapped", mapped);

nums.forEach((item) => { alert(item) })

// return a array of elements follow the condition 
let filter = nums.filter((item) => { return (item > 8) });
console.log(filter);

// return a element according to condition 
let find = nums.find((item) => { return (item > 8) });
console.log(find);

// return true if and only if all elements flllow the condition 
let every = nums.every((item) => { return (item > 8) });
console.log(every);

// return true if any one elements flllow the condition 
let some = nums.some((item) => { return (item > 8) });
console.log(some);

// return a index of element folow the condition 
let findIndexx = nums.findIndex((item) => { return (item > 10) });
console.log(findIndexx);

// sort the array of numbers in ascending order 
let sorted = nums.sort((a, b) => { return (a - b) });
console.log(sorted);

// sort the array of numbers in descending order 
let sorteddescending = nums.sort((a, b) => { return (b - a) });
console.log(sorteddescending);

let fruit = ["Apple", "Mango", "Orange", "Watermelon", "Pineapple"];

// sort the array of string in ascending order 
let sortedFruits = fruit.sort((a, b) => { return (a.localeCompare(b)) });
console.log(sortedFruits);

// sort the array of string in descending  order 
let sortedFruitsdescending = fruit.sort((a, b) => { return (b.localeCompare(a)) });
console.log(sortedFruitsdescending);

let nested = [2, 45, 78, [3, 90, 20], 89, 0];
// remove nested array from array
let nestedflat = nested.flat();
console.log(nestedflat);

let animals = ['Lion', 'Tiger', 'Penguin', 'Dog'];
console.log(animals.lastIndexOf('Tiger'));