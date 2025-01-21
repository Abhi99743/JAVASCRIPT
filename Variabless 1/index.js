console.log("Variables");

function Variables() {

}
// var , let , const 
// declare 
var x;

// define
x = 123
// declare define both at a time 
var x = 123
let a = 34;
console.log(a);

// must be declare before use 
let c = a + 4;
c = 23;
console.log(c);

// can not be redeclare 
let a = 23

// blockscope 
{
    let a = 45;
    console.log("a", a);
}

console.log(a);
a = 56;

//can not be reassign 
const w = 3;
w = 4;