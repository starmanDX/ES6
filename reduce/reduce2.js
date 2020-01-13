var primaryColors = [
    {color: "red"},
    {color: "yellow"},
    {color: "blue"}
];

//ES5
// var allColors = [];
// for(i=0;i<primaryColors.length; i++) {
//     allColors.push(primaryColors[i].color);
// };
// console.log(allColors)

//ES6
var allColors = primaryColors.reduce(function(allColors, primaryColor) {
    allColors.push(primaryColor.color);
    return allColors
}, []);
console.log(allColors);