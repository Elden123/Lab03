let imageNames = ["apple.jpg", "banana.jpeg", "grapes.jpeg", "pineapple.jpeg", "watermelon.jpg"];
let index = 0;

function previous() {
    let img = document.getElementById("img");

    if(index <= 0) {
        index = 4;
    } else {
        index--;
    }
    img.src = "imgs/" + imageNames[index];
}

function next() {
    let img = document.getElementById("img");

    if(index >= 4) {
        index = 0;
    } else {
        index++;
    }
    img.src = "imgs/" + imageNames[index];
}