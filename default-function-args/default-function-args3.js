//ES5
// function addOffset(style) {
//     if (!style) {
//       style = {}; 
//     }
    
//     style.offset = '10px';
    
//     return style;
// };

//ES6 REFACTOR
function addOffset(style = {}) {
    style.offset = '10px';
    return style;
}
console.log(addOffset());