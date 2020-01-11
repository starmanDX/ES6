var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

//ES5
// var filteredNumbers = [];
// for(i=0;i<numbers.length;i++) {
//     if(numbers[i] > 50) {
//         filteredNumbers.push(numbers[i]);
//     }
// };
// console.log(filteredNumbers);

//ES6
var filteredNumbers = numbers.filter(function(number) {
    return number > 50;
});
console.log(filteredNumbers);