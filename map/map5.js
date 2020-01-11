function pluck(arr, str) {
    var colors = arr.map(function(str) {
        return str.color;
    });
    return colors;
};

var paints = [{color: 'red'}, {color: 'blue'}, {color: 'yellow'}];
console.log(pluck(paints, 'color'));