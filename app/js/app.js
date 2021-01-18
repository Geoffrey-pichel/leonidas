

// Adds and removes body class depending on screen width.
function screenClass() {
    var element = document.getElementById("carouselIndicators");

    if(window.matchMedia('screen and (min-width: 1440px)').matches) {
        element.classList.add("carousel-indicators");
        } else {
            element.classList.remove("carousel-indicators");
        }
}

// Fire.
screenClass();

// And recheck when window gets resized.
window.addEventListener('resize', function(){
    screenClass();
});