var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];

//ES5
// var speeds = [];
// for(i=0; i < trips.length; i++) {
//     speeds.push(trips[i].distance, trips[i].time);
// };
// console.log(speeds);

//ES6
var speeds = trips.map(function(trip) {
    return (trip.distance / trip.time);
});
console.log(speeds);