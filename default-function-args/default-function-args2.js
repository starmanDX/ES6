//ES5
// function sum(a, b) {
//     if (a === undefined) {
//         a = 0;
//     }

//     if (b === undefined) {
//         b = 0;
//     }

//     return a + b;
// }

//ES6 REFACTOR
function sum(a = 0, b = 0) {
    return a + b
};
console.log(sum(2, ));