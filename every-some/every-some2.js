var names = [
    "Alexandria",
    "Matthew",
    "Joe"
];

//ES5
// var allLongerThan4 = true;
// var someLongerThan4 = false;
// for(i=0;i<names.length;i++) {
//     if(names[i].length < 4) {
//         allLongerThan4 = false;
//     } else {
//         someLongerThan4 = true;
//     }
// };
// console.log(allLongerThan4);
// console.log(someLongerThan4);

//ES6
var allLongerThan4 = names.every(function(name) {
    return name.length > 4;
});
var someLongerThan4 = names.some(function(name) {
    return name.length > 4;
});
console.log(allLongerThan4);
console.log(someLongerThan4);