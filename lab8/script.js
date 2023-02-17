let videoElem = document.getElementById("video");
let playButton = document.getElementById("playbutton");

playButton.addEventListener("click", handlePlayButton, false);

playVideo();

async function playVideo() {
    console.log("playing");
    try {
        await videoElem.play();
        playButton.className = "playing";
    } catch(err) {
        playButton.className = "";
    }
}

function handlePlayButton() {
    if (videoElem.paused) {
        playVideo();
    } else {
        videoElem.pause();
        playButton.className = "";
        console.log("stop")
    }
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}
