//CONVERT THE ARRAY OF ARRAYS
//TO AN ARRAY OF OBJECTS
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

//ES5
// var newPoints = [];
// for(i=0;i<points.length;i++) {
//     var x = points[i][0]
//     var y = points[i][1]
//     newPoints.push({x, y});
// };
// console.log(newPoints)

//--------
//ES6 USING MAP HELPER, ARROW SYNTAX, ENHANCED OBJ
//LITERALS, AND DESTRUCTURING
//--------

//BASE RETURN USING .MAP
// const newPoints = points.map((pair) => {
//     const x = pair[0];
//     const y = pair[1];
//     return {x, y};
// });
// console.log(newPoints)

// DESTRUCTURES THE TWO CONST VARIABLES INTO ONE
// const newPoints = points.map((pair) => {
//     const [x, y] = pair;
//     return {x, y};
// })
// console.log(newPoints)

//DESTRUCTURES THE CONST VARIABLES INTO THE
//FUNCTION ARGUMENT
// const newPoints = points.map(([x, y]) => {
//     return {x: x, y: y};
// });
// console.log(newPoints)

//REDUCE DOWN THE RETURN WITH ENHANCED OBJECT
//LITERALS
// const newPoints = points.map(([x, y]) => {
//     return {x, y};
// });
// console.log(newPoints)

//FURTHER REDUCE WITH IMPROVED ARROW FUNCTION SYNTAX
const newPoints = points.map(([x, y]) => ({x, y}));
console.log(newPoints)