function product(a, b, c, d, e) {
    var numbers = [a,b,c,d,e];
    
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
};

//ES6 REFACTOR
function product(...numbers) {
    return numbers.reduce((acc, number) => acc * number);
};
console.log(product(2,4,6,8));