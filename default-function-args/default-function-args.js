//ES5
// function makeAjaxRequest(url, method) {
//     if(!method) {
//         method = "GET";
//     }
//     return method;
// }

//ES6
//ASSIGNING A VALUE TO THE ARGUMENT
//SETS ITS VALUE AS THE DEFAULT
function makeAjaxRequest(url, method = 'GET') {
    return method;
};
console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', 'POST'));