const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

//ES6 REFACTOR - CONVERT TO ARRAY OF OBJECTS
const classesAsObject = classes.map(([subject, time, teacher]) => ({subject, time, teacher}));
console.log(classesAsObject);