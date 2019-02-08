//onload event handler
window.onload = onPageLoad;

//declare  variable 
let arrayIndex = 0;
let bannerImages = [
    "images/banner1.jpg", 
    "images/banner2.jpg", 
    "images/banner3.jpg"
];
//preloader function
function onPageLoad() {

    arrayIndex++;
    if (arrayIndex == bannerImages.length) {
        arrayIndex = 0;
    }
    document.getElementById("preLoadedBanner").src = bannerImages[arrayIndex];

    setTimeout(onPageLoad, 3 * 1000);
}
