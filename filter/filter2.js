var products = [{
        name: "cucumber",
        type: "vegetable",
        quantity: 0,
        price: 1
    },
    {
        name: "banana",
        type: "fruit",
        quantity: 10,
        price: 15
    },
    {
        name: "celery",
        type: "vegetable",
        quantity: 30,
        price: 13
    },
    {
        name: "orange",
        type: "fruit",
        quantity: 3,
        price: 5
    },
    {
        name: "tomato",
        type: "vegetable",
        quantity: 3,
        price: 5
    },
];

//ES5
// var filteredProducts = [];
// for(i=0;i<products.length;i++) {
//     if(products[i].type === "vegetable" && products[i].quantity > 0 && products[i].price < 10) {
//         filteredProducts.push(products[i]);
//     }
// };
// console.log(filteredProducts);


//ES6
var filteredProducts = products.filter(function (product) {
    return product.type === "vegetable" 
    && product.quantity > 0 
    && product.price < 10;
});
console.log(filteredProducts);