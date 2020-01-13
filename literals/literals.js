//IN ES6, IDENTICAL KEY VALUE PAIRS ARE SHORTENED
//TO A SINGLE LITERAL

const red = '#ff0000';
const blue = '#0000ff';

//const COLORS = {red: red, blue: blue};
const COLORS = {
    red,
    blue
};

//KEYS WITH A FUNCTION VALUE ARE SHORTENED
//TO REMOVE THE COLON AND FUNCTION
// const color = 'red';

// const Car = {
//   color: color,
//   drive: function() {
//     return 'Vroom!';
//   },
//   getColor: function() {
//     return this.color;
//   }
// };
const color = 'red';

const Car = {
    color,
    drive: () => 'Vroom!',
    getColor() {
        return this.color;
    }
};