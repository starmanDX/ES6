var users = [
    {name: "Jill"},
    {name: "Alex"},
    {name: "Bill"}
];

//ES5
// var user
// for(i=0;i<users.length;i++) {
//     if(users[i].name === 'Alex') {
//         user=users[i];
//         break;
//     }
// }
// console.log(user);

//ES6
var user = users.find(function(user) {
    return user.name === "Alex";
});
console.log(user);