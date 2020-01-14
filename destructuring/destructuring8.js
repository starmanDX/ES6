//RETURN AN ARRAY OF EACH NUMBER DOUBLED
const numbers = [1, 2, 3];

//ES5
// function double(numbers) {
//     let doubledArray = []
//     for(i=0;i<numbers.length;i++) {
//         var doubled = numbers[i] * 2
//         doubledArray.push(doubled)
//     } 
//     return doubledArray
// }
// console.log(double([1,2,3])); // [2,4,6]

//ES6 REFACTOR USING DESTRUCTURING, RECUSION,
//AND REST/SPREAD OPERATORS
function double([first, ...rest]) {
    if(rest.length === 0) {
        return [first * 2];
    } else {
        return [first * 2, ...double(rest)];
    }
};
console.log(double([1,2,3])); // [2,4,6]