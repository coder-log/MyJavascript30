document.getElementById("keyA").addEventListener("click", playDrum);
document.addEventListener("keypress", keyPressed);

function playDrum() {
    return console.log("Click")  
};

function keyPressed() {
    var key = event;
    return console.log(key)
}


