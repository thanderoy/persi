// Isolate the video player
function isolateTarget() {
    let x = document.getElementsByTagName("iframe");
    console.log("found frame");
    for (let t of x) {
        if (t.id === "iframe-embed") return e;
    }
    return null;
};

// Toggle Fullscreen
function toogleFullscreen() {
    if (!document.fullscreenElement) {
        let target = isolateTarget();

        if (target.requestFullscreen) {
            target.requestFullscreen();
        } else if (target.mozRequestFullScreen) { // Firefox
            target.mozRequestFullScreen();
        } else if (target.webkitRequestFullscreen) { // Chrome, Safari and Opera
            target.webkitRequestFullscreen();
        } else if (target.msRequestFullscreen) { // IE/Edge
            target.msRequestFullscreen();
        }

        console.log("[Persi] Video playback automatically scaled to fullscreen.")
    }
};



// Persistent
window.onload = function() {
    console.log("[Persi] Persi is running...");
    toogleFullscreen();
};


