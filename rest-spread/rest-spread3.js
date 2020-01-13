function join(array1, array2) {
    return array1.concat(array2);
};

function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
  }

//ES6 REFACTOR

function join(array1, array2) {
    return [...array1, ...array2];
};

function unshift(array, ...items) {
    return [...items, ...array];
};