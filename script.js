const audio = document.getElementById("audio");
const fileInput = document.getElementById("audioFile");

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");

// File Upload
fileInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        audio.src = URL.createObjectURL(file);
        audio.load();
    }
});

// Play
playBtn.onclick = function () {
    audio.play();
};

// Pause
pauseBtn.onclick = function () {
    audio.pause();
};

// Back 10 Seconds
prevBtn.onclick = function () {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
};

// Forward 10 Seconds
nextBtn.onclick = function () {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
};

// Total Duration
audio.onloadedmetadata = function () {
    progress.max = Math.floor(audio.duration);
    totalTime.innerHTML = format(audio.duration);
};

// Progress Update
audio.ontimeupdate = function () {
    progress.value = Math.floor(audio.currentTime);
    currentTime.innerHTML = format(audio.currentTime);
};

// Seek
progress.oninput = function () {
    audio.currentTime = progress.value;
};

// Time Format
function format(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);

    if (sec < 10) sec = "0" + sec;

    return min + ":" + sec;
}