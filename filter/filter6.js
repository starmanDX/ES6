var numbers = [5, 10, 15, 20, 25]

//CREATES THE ITERATOR FUNCTION
function lessThanFifteen(number) {
    return number > 15;
}

//FUNCTION THAT RETURNS A NEW ARRAY OF NUMBERS THAT
//FAIL THE ITERATOR FUNCTION
function reject(array, iteratorFunction) {
    return array.filter(function(num) {
        return !iteratorFunction(num);
    });
};

console.log(reject(numbers, lessThanFifteen));