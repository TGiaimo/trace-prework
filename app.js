var pictures = [
  "dogs/all1.jpg",
  "dogs/all2.jpg",
  "dogs/tux1.jpg",
  "dogs/tux2.jpg",
  "dogs/henry1.jpg",
  "dogs/henry2.jpg",
  "dogs/holly1.jpg",
  "dogs/holly2.jpg"

];

var counter = 0;
var img = document.getElementsByClassName("dogs");
var btn = document.getElementsByClassName("btn");

btn[0].addEventListener("click", function() {
  counter -= 1;
  if(counter === -1) {
    counter = 7;
  }
  img[0].src = pictures[counter];
});
btn[1].addEventListener("click", function() {
  counter += 1;
  if(counter === pictures.length) {
    counter = 0;
  }
  img[0].src = pictures[counter];
});