document.getElementById("keyA").addEventListener("click", playDrum);
window.addEventListener("keypress", keyPressed);

function playDrum() {
    return console.log("Click")  
};

function keyPressed(event) {
    var key = event.key;
    const audio = document.querySelector('#keyA-audio');
    audio.play();
        return console.log(key,audio)
}


