let text = "aayush$rajdev";
console.log(text);
console.log(text.length);

// gives a piece of string 
let sliced = text.slice(2, 5);
console.log("ayush", sliced);

// consider negetive as zero 
let substring = text.substring(-9, 7);
console.log(substring)

// return a number of charecter same as second parametr from starting position 
let substr = text.substr(4, 9);
console.log(substr);

// convert the string into array 
let arrayy = text.split("$");
console.log(arrayy);

// convert into uppercase 
let uppercase = text.toLocaleUpperCase();
console.log(uppercase);

// convert into lowercase 
let lowercase = text.toLocaleLowerCase();
console.log(lowercase);

// removes white space 
// trimstart 
// trimend 
let trimmed = text.trim();
console.log(trimmed.length);

// check whether charecter is included by string or not 
let includes = text.includes("ayush");
console.log(includes);

// joines two strings
let text2 = "hello";
let joined = text.concat("  ", text2);
console.log(joined);

// gives a character from  particular position 
let charectersss = text.charAt(10);
console.log(charectersss);