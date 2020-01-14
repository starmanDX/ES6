//ES5
// var savedFile = {
//     extension: 'jpg',
//     name: 'repost',
//     size: 14040
// };

// function fileSummary(file) {
//     return "The file " + file.name + file.extension + " is of size " + file.size;
// };
// console.log(fileSummary(savedFile));

//ES6
const savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary({name,extension, size}) {
    return `The file ${name}.${extension} is of size ${size}`;
};

console.log(fileSummary(savedFile));