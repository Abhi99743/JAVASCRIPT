let veges = ["Potato", "Tomato", "Pease", "Chilli", "Garlic"];
console.log("veges", veges);

// length count / index particular word
console.log(veges.length);
console.log(veges[0]);

// new name added in last 
veges.push("newvwgws");
console.log(veges);

// remove name added in last
veges.pop();
console.log(veges);

// remove first name
veges.shift();
console.log(veges);

// added name in first
veges.unshift("onion");
console.log(veges);

// added new element in place
veges.splice(2, 0, "chillipocks");
console.log(veges);

// check included word is here or not 
let isincludes = veges.includes("Tomato");
console.log(isincludes);

// two word joined 
let text = "hello";

console.log(Array.isArray(veges));
let joined = veges.join(" ,");
console.log(joined);

// give a piece of string 
let sliced = veges.slice(2, 5);
console.log(sliced);
