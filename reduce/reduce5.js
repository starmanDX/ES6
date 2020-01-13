var desks = [{
        type: 'sitting'
    },
    {
        type: 'standing'
    },
    {
        type: 'sitting'
    },
    {
        type: 'sitting'
    },
    {
        type: 'standing'
    }
];

//ES5
// let result = {
//     sitting: 0,
//     standing: 0
// };
// for (i = 0; i < desks.length; i++) {
//     if(desks[i].type === "sitting") {
//         result.sitting++
//     }
//     if(desks[i].type === "standing") {
//         result.standing++
//     }
// };
// console.log(result);

//ES6
var deskTypes = desks.reduce(function (previous, desk) {
    if (desk.type === "sitting") {
        ++previous.sitting
    }
    if (desk.type === "standing") {
        ++previous.standing
    }
    return previous
}, {
    sitting: 0,
    standing: 0
});
console.log(deskTypes);