var trips = [{
    distance: 34
}, {
    distance: 12
}, {
    distance: 1
}];

//ES5
// var totalDistance = 0
// for(i=0;i<trips.length;i++) {
//     totalDistance += trips[i].distance;
// };
// console.log(totalDistance);

//ES6
var totalDistance = trips.reduce(function (totalDistance, trip) {
    return totalDistance + trip.distance;
}, 0);
console.log(totalDistance);