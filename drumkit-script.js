document.getElementById("keyA").addEventListener("click", playDrum);
window.addEventListener("keydown", keyPressed);

function playDrum() {
    return console.log("Click")  
};

function keyPressed(event) {
    var key = event.key;
    const audio = document.querySelector('#keyA-audio');
    const keyDiv = document.querySelector('#keyA');
    audio.currentTime ="0";
    audio.play();
    keyDiv.classList.replace("key","key-pressed");
        return console.log(key, keyDiv, audio);
}


