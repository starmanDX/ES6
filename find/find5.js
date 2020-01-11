var ladders = [
    {id: 1, height: 20 },
    {id: 3, height: 25 },
];

//ES5
// function findWhere(array,criteria) {
//     for(i=0;i<array.length;i++) {
//         if(Object.values(array[i])[1] === Object.values(criteria)[0]) {
//             return array[i];
//         }
//     }
// };
// console.log(findWhere(ladders, { height: 20 }));

//ES6
//RETURNS THE OBJECT IN THE ARRAY THAT MATCHES
//THE PROVDED KEY/VALUE CRITERIA
function findWhere(array, criteria) {
  return array.find(function(ladder) {
      return Object.values(criteria)[0] === Object.values(ladder)[1];
  });
}
console.log(findWhere(ladders, { height: 20 }));