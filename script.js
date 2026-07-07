// ===============================
// Ultra Bass Sound - script.js Part 1
// Upload + Play/Pause
// ===============================

const fileInput = document.getElementById("audioFile");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const repeatBtn = document.getElementById("repeatBtn");
const shuffleBtn = document.getElementById("shuffleBtn");

const progress = document.querySelector('input[type="range"]');
const wave = document.querySelector(".wave");

const audio = new Audio();

let isPlaying = false;

// Upload Audio
fileInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    audio.src = URL.createObjectURL(file);

    wave.innerHTML = `
        <strong>${file.name}</strong>
    `;

    playBtn.innerHTML = '<i class="fas fa-play"></i>';

    isPlaying = false;
});

// Play / Pause
playBtn.addEventListener("click", function () {

    if (!audio.src) {
        alert("Please upload an audio file first.");
        return;
    }

    if (isPlaying) {

        audio.pause();

        playBtn.innerHTML =
            '<i class="fas fa-play"></i>';

    } else {

        audio.play();

        playBtn.innerHTML =
            '<i class="fas fa-pause"></i>';

    }

    isPlaying = !isPlaying;

});

// Progress Bar
audio.addEventListener("timeupdate", function () {

    if (!audio.duration) return;

    progress.value =
        (audio.currentTime / audio.duration) * 100;

});

// Seek
progress.addEventListener("input", function () {

    if (!audio.duration) return;

    audio.currentTime =
        (progress.value / 100) * audio.duration;

});

// Song Finished
audio.addEventListener("ended", function () {

    isPlaying = false;

    playBtn.innerHTML =
        '<i class="fas fa-play"></i>';

});

console.log("Ultra Bass Sound Part 1 Loaded");
