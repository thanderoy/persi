// Isolate the video player
// function isolateTarget() {
//     let x = document.getElementsByTagName("iframe");
//     console.log("found frame");
//     for (let t of x) {
//         if (t.id === "iframe-embed") return e;
//     }
//     return null;
// };

// Toggle Fullscreen
function toogleFullscreen() {
    if (!document.fullscreenElement) {
        // let target = isolateTarget();
        let target = document.querySelector('.player-frame');

        // Approach II
        target.style.height = "100vh";
        target.style.width = "100vw";
        target.style.top = "0";
        target.style.left = "0";
        target.style.position = "fixed";
        target.style.zIndex = "9999"
        console.log("[Persi] Video playback automatically scaled to fullscreen.")
    }
};



// Persistent
window.onload = function() {
    console.log("[Persi] Persi is running...");
    toogleFullscreen();
};


