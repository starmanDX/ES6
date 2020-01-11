var numbers = [1,2,3,4,5];
var sum = 0;

//USING AN ANONYMOUS FUNCTION
//numbers.forEach(function(number) {
//    sum+= number;
//});

function adder(number) {
    sum += number;
}

numbers.forEach(adder) {
    sum += number;
});

console.log(sum);