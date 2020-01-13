//ES5
// var statuses = [ 
//   { code: 'OK', response: 'Request successful' },
//   { code: 'FAILED', response: 'There was an error with your request' },
//   { code: 'PENDING', response: 'Your reqeust is still pending' }
// ];
// var message = '';
// var currentCode = 'OK';

// for (var i = 0; i < statuses.length; i++) {
//   if (statuses[i].code === currentCode) {
//     message = statuses[i].response;
//   }
// }

//ES6
const statuses = [{
        code: 'OK',
        response: 'Request successful'
    },
    {
        code: 'FAILED',
        response: 'There was an error with your request'
    },
    {
        code: 'PENDING',
        response: 'Your reqeust is still pending'
    }
];
var message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
        message = statuses[i].response;
    }
}