var users = [{
        id: 1,
        admin: true
    },
    {
        id: 2,
        admin: false
    },
    {
        id: 3,
        admin: false
    },
    {
        id: 4,
        admin: false
    },
    {
        id: 5,
        admin: true
    },
];

//ES5
// var filteredUsers = [];
// for(i=0;i<users.length;i++) {
//     if(users[i].admin) {
//         filteredUsers.push(users[i]);
//     }
// };
// console.log(filteredUsers);

//ES6
var filteredUsers = users.filter(function (user) {
    return user.admin
});
console.log(filteredUsers);