var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
//ES5
// var heights = [];
// for (var i = 0; i < images.length; i++) {
//     heights.push(images[i].height);
// };
// console.log(heights);

  //ES6
  var heights = images.map(function(image) {
      return image.height;
  });
  console.log(heights);