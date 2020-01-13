//REST OPERATOR (...) CAPTURES ALL ARGUMENTS IN A
//FUNCTION AND RETURNS THEM AS AN ARRAY
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0)
};
console.log(addNumbers(1,2,3,4,5,6));

//SPREAD OPERATOR (...) DUMPS EVERYTHING FROM ONE
//ARRAY INTO ANOTHER ARRAY AS INDIVIDUAL VALUES
const defaultColors = ["red", "green"];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

console.log(['blue', ...fallColors, ...defaultColors, ...userFavoriteColors]);

function validateShoppingList(...items) {
   if(items.indexOf('milk') < 0) {
       return ['milk', ...items];
   } 
}
console.log(validateShoppingList('oranges', 'bread', 'eggs'));