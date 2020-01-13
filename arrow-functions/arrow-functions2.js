//ES5
// const double = function(number) {
//     return 2 * number;
// }
// double(8);

//ES6
//PARENS ON ARG CAN BE OMITTED IF ONLY
//A SINGLE ARG
const double = number => 2 * number;
double(8);

//ES5
// var numbers = [1,2,3];
// var number = [];
// for(i=0;i<numbers.length;i++) {
//     number.push(2 * numbers[i]);
// };

//ES6
const numbers = [1,2,3];
numbers.map(number => 2 * number);