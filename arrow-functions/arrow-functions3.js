//ES5
// var fibonacci = function(n) {
//     if (n < 3) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

const fibonacci = n => {
    if(n === 0) return 0;
    if(n < 3) return 1;
    return fibonacci(n-1) + fibonacci(n-2)
};
fibonacci(4));