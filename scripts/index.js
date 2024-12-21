// page init
function init() {
    video = document.getElementById('bg-video');
}

// page main script
function main() {
    // play video
    video.playbackRate = 0.75;
    video.playsInline = true;
    video.play();
}

// close dialog
function closeDialog() {
    dialog = document.querySelector(".register-background");
    dialog.classList.add("register-close");
}