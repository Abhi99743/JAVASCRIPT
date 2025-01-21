console.log("Datatypes");
// string 
let text = "test name 896";

console.log(typeof text);

let num = 12322;
// number 
console.log(typeof num);

let x;
// undefined 
console.log(typeof x);

// collection of property value pair 
// object 
let person = { uname: "aayush", age: 21, surname: "test", id: 2135474 };
console.log(person);
console.log(person.uname);
console.log(person.age);

// array 
let students = ["sty1", "sty2", "sty3", "sty4"];
console.log(students);
console.log(students.length);
console.log(students[0]);
console.log(students[2]);

let multiple = [{ name: "rutvi", surname: "test1", age: 21 },
{ name: "sty2", surname: "test2", age: 41 }];
console.log(multiple.length);
console.log(multiple[0]);
console.log(multiple[0].name);

// boolean => true false;
let booolean = true;
console.log( typeof booolean);