console.log("date methods");
let datetoday = new Date();
console.log(datetoday);


let pastdate = new Date("12/12/1992");
console.log(pastdate)


let datee = pastdate.getDate();
console.log(datee);

let month = pastdate.getMonth() + 1;
console.log(month);


let year = pastdate.getFullYear();
console.log(year);


pastdate.setFullYear("2039");
console.log(pastdate);


pastdate.setDate("31");
console.log(pastdate);



function myfunction() {

    let fieldvalue = document.getElementById("dat").value;
    console.log(new Date(fieldvalue));


    let dateform = new Date(fieldvalue)
    let dateee = dateform.getDate();
    console.log(month);


}

