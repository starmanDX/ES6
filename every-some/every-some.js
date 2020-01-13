var computers = [
    { name: "Apple", ram: 24 },
    { name: "Compaq", ram: 4 },
    { name: "Acer", ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

//ES5
// for(i=0;i<computers.length;i++) {
//     if (computers[i].ram < 16) {
//         allComputersCanRunProgram = false;
//     } else {
//         onlySomeComputersCanRunProgram = true;
//     }
// };

// console.log(allComputersCanRunProgram);
// console.log(onlySomeComputersCanRunProgram);

//ES6

var allComputersCanRunProgram = computers.every(function(computer) {
    return computer.ram > 16;
});
var onlySomeComputersCanRunProgram = computers.some(function(computer) {
    return computer.ram > 16;
})

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);