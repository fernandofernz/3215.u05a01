//on load event handler
window.onload= onPageLoad;
var i = 0;
let arrayIndex = 0;
//array of Images to preLoad
let arrayImages = [
    "images/event.jpg", 
    "images/event_off.jpg", 
    "images/firefighter.jpg",
    "images/firefighter_off.jpg", 
    "images/silhouette.jpg", 
    "images/silhouette_off.jpg",
    "images/work.jpg", 
    "images/work_off.jpg"
];

//function preLoader
function onPageLoad () {
i++;
if (i == arrayImages.length) {
    i = 0;
}
console.log("loaded");
console.log(arrayImages);
}

//function mouseRollOver
function mouseRollOver (MyImage) {
    //image passed in
    var imageIn = MyImage.getAttribute('src')
    //index of image passed in
    var indexImageIn = arrayImages.indexOf(imageIn);
    //storing and increasing index of array
    arrayIndex = indexImageIn; 
    arrayIndex++;
    //storing new source
    var newSource = arrayImages[arrayIndex]
    //passing new source
    MyImage.src = newSource;

}

   
//function mouseUnRoll
function mouseUnRoll (MyImage) {
     //image passed in
     var imageIn = MyImage.getAttribute('src')
     //index of image passed in
     var indexImageIn = arrayImages.indexOf(imageIn);
     //storing and decreasing index of array
     arrayIndex = indexImageIn; 
     arrayIndex--;
     //storing new source
     var newSource = arrayImages[arrayIndex]
     //passing new source
     MyImage.src = newSource;
}


