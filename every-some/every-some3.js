var users = [{
        id: 21,
        hasSubmitted: true
    },
    {
        id: 62,
        hasSubmitted: false
    },
    {
        id: 4,
        hasSubmitted: true
    }
];

//ES5
//   var hasSubmitted = true;
//   for(i=0;i<users.length;i++) {
//       if(users[i].hasSubmitted === false) {
//           hasSubmitted = false;
//       }
//   };
//   console.log(hasSubmitted);

//ES6
var hasSubmitted = users.every(function (user) {
    return user.hasSubmitted;
});
console.log(hasSubmitted);