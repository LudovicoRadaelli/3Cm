function toggleFullscreen(elementId) {
    const elem = document.getElementById(elementId);
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}


let startX = 0;

function handleTouchStart(evt) {
    startX = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
    if (!startX) return;
    let deltaX = evt.touches[0].clientX - startX;
    if (Math.abs(deltaX) > 50) {  // soglia minima per considerare swipe
        if (deltaX > 0) {
            previousSlide(2);
        } else {
            nextSlide(2);
        }
        startX = 0; // reset
    }
}

const container = document.getElementById("slide-container2");
container.addEventListener("touchstart", handleTouchStart, false);
container.addEventListener("touchmove", handleTouchMove, false);


