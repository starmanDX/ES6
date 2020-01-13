//WRITE A FUNCTION THAT TAKES A STRING OF PARENS AND
//RETRNS TRUE IF THEY ARE BALANCED, AND FALSE IF NOT.

//ES6
function balancedParens(string) {
    return !string.split("").reduce(function(previous, char) {
        if (previous < 0) {
            return previous;
        };
        if (char === "(") {
            return ++previous;
        };
        if (char === ")") {
            return --previous;
        };
        return previous;
    }, 0);
};
console.log(balancedParens("()()"));