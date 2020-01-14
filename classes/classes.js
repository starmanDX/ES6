// //CREATE CAR CONSTRUCTOR
// function Car(options) {
//     this.title = options.title;
// };

// //ADD DRIVE METHOD TO CAR
// Car.prototype.drive = () => 'vroom'

// //CREATE TOYOTA CONSTRUCTOR
// function Toyota(options) {
//     Car.call(this, options);
//     this.color = options.color
// }

// //ADD ALL PROTOS FROM CARS TO TOYOTA
// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;
// Toyota.prototype.honk = () => "beep"

// //CREATE A NEW TOYOTA MODEL
// const toyota = new Toyota({color: "Red", title: 'Daily Driver'});

// console.log(toyota.drive())
// console.log(toyota.honk())
// console.log(toyota)

//ES6 REFACTOR
class Car {
    constructor({title}) {
        this.title = title;
    }
    drive() {
        return 'vroom';
    }
};

class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }
    honk() {
        return 'beep';
    }
};

const toyota = new Toyota({color: "red", title: "Daily Driver"});
console.log(toyota.honk());
console.log(toyota.drive())
console.log(toyota);