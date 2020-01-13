var numbers = [10, 20, 30];
var sum = 0;

//ES5
// for(i=0;i<numbers.length;i++) {
//     sum += numbers[i];
// };
// console.log(sum);

//ES6
var sum = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);
console.log(sum);