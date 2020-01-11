var cars = [
    { model: 'Buick', price: 'CHEAP'},
    { model: 'Camero', price: 'EXPENSIVE'}
]

//ES5
// var prices = [];
// for(var i = 0; i < cars.length; i++) {
//     prices.push(cars[i].price);
// };
// console.log(prices)

// //ES6
var prices = cars.map(function(car) {
    return car.price;
});
console.log(prices);