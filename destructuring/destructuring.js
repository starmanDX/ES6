//ES5
// var expense = {
//     type: "Business",
//     amount: "$45 USD"
// };

// var type = expense.type;
// var amount = expense.amount;

//ES6
const expense = {
        type: "Business",
        amount: "$45 USD"
    },
    {type,amount} = expense;

console.log(`${type}, ${amount}`)