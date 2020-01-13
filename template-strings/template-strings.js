//ES5
// function getMessage() {
//     const year = new Date().getFullYear();
//     return "The year is " + year;
// }

// getMessage();

//ES6
//INSIDE ` ` STRING, ENTER ANY DESIRED VALID JS INTO 
//${} BRACKETS
function getMessage() {
    const year = new Date().getFullYear();
    return `The year is ${year}`;
}

getMessage();