var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
var areas = [];

//ES5
// for(i=0;i<images.length;i++) {
//     areas.push(images[i].height * images[i].width);
// };
// console.log(areas);

//ES6
  images.forEach(function(image) {
      areas.push(image.height * image.width);
  });
  console.log(areas);