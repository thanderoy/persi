// Isolate the video player
function isolateTarget() {
    let x = document.getElementsByTagName("iframe");
    for (let t of x) {
        if (t.id === "iframe-embed") {
            console.log("[Persi] -> Found player");
            return t;
        }
    }
    console.log("[Persi] -> Failed to isolate player");
    return null;
};

// Request fullscreenAPI 
function requestFullScreen(element) {
    if (!document.fullscreenElement) {
        // Supports most browsers and their versions.
        var requestMethod = element.requestFullScreen || 
            element.webkitRequestFullScreen           || 
            element.mozRequestFullScreen              || 
            element.msRequestFullScreen;
        if (requestMethod) {
            requestMethod.call(element);
        }
    }
}

// Persistent
window.onload = function() {
    console.log('[Persi] is running...');
    element = isolateTarget();
    
    element.onload = function() {
        requestFullScreen(element);
    }; 
}
