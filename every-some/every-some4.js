var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

//ES5
// var inProgress = false;
// for(i=0;i<requests.length;i++) {
//     if(requests[i].status === "pending") {
//         inProgress = true;
//     }
// };
// console.log(inProgress);

//ES6
var inProgress = requests.some(function(request) {
    return request.status === 'pending';
});
console.log(inProgress);