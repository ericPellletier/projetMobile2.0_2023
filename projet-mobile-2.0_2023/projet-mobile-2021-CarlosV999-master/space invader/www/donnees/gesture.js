
var Screen = {
    height: window.innerHeight,
    width: window.innerWidth
};

var MAX_VELOCITY = Screen.height * 0.009;


//Initial Setup

resetState();

/* Gesture Bindings */
var touchElement = document.getElementById('body');
var touchRegion = new ZingTouch.Region(touchElement);
var CustomSwipe = new ZingTouch.Swipe({
    escapeVelocity: 0.1
})