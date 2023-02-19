let videoElem = document.getElementById("video");
let playButton = document.getElementById("play-video");
let areaPolyUp = document.getElementById("poly-up");
let areaPolyBottom = document.getElementById("poly-bot");

areaPolyUp.coords = createUpperPoints(300, 300, 190, 190, 100, 0.1);
areaPolyBottom.coords = createBottomPoints(300, 300, 190, 190, 100, 0.1);


async function playVideo() {
    try {
        await videoElem.play();
        console.log("playing...")
    } catch(err) {
        console.error(err)
    }
}

function handlePlayButton() {
    if (videoElem.paused) {
        playVideo();
        playButton.innerText = "Stop";
    } else {
        videoElem.pause();
        playButton.innerText = "Play";
        console.log("stopped");
    }
}

function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}

function createUpperPoints(w, h, cx, cy, r, dt){
    let res = [`0,0`, `0,${cy}`];

    for (let t = 0.0; t >= -Math.PI; t -= dt){
        res.push((Math.floor(cx + Math.cos(t + Math.PI)*r)) + ',' + (Math.floor(cy + Math.sin(t)*r)));
    }
    res.push(`${w},${cy}`)
    res.push(`${w},0`)
    return res.join(' ')
}

function createBottomPoints(w, h, cx, cy, r, dt){
    let res = [`0,${h}`, `0,${cy}`];

    for (let t = 0.0; t >= -Math.PI; t -= dt){
        res.push((Math.floor(cx + Math.cos(Math.PI - t)*r)) + ',' + (Math.floor(cy + Math.sin(-t)*r)));
    }
    res.push(`${w},${cy}`)
    res.push(`${w},${h}`)
    return res.join(' ')
}