//CREATE A CLASS MONSTER WITH CONSTRUCTORS HEALTH,
//SET TO 100 AND NAME, SET TO THE CALLED 'OPTIONS' 
//OBJECT'S NAME VALUE
class Monster {
  constructor(options) {
      this.health = 100;
      this.name = options.name;
  }
};

//CREATE A SUBCLASS OF MONSTER SNAKE WHICH HAS
//A BITE() METHOD TAKING ANOTHER SNAKE AS AN ARG
//THAT REDUCCES A SNAKE'S HEALTH BY 10
class Snake extends Monster {
    constructor(options) {
        super(options);
    }
    bite(snake) {
        return snake.health -= 10;
    }
};
   
const snake = new Snake({name: 'Python'});
console.log(snake)
console.log(snake.bite(snake));
console.log(snake);