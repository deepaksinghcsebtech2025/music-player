let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let volume = document.getElementById("volume");
let speed = document.getElementById("speed");

// Sync metadata for progress bar
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

// Play/Pause functionality
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

// Update progress bar as the song plays
setInterval(() => {
    if (!song.paused) {
        progress.value = song.currentTime;
    }
}, 500);

// Seek functionality
progress.oninput = function () {
    song.currentTime = progress.value;
};

// Volume control
volume.oninput = function () {
    song.volume = volume.value;
};

// Playback speed control
speed.oninput = function () {
    song.playbackRate = speed.value;
};