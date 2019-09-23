function change() {
    let theText = document.getElementById("theText");

    let bRed = document.getElementById("bRed").value;
    let bGreen = document.getElementById("bGreen").value;
    let bBlue = document.getElementById("bBlue").value;
    let bWidth = document.getElementById("bWidth").value;

    let gRed = document.getElementById("gRed").value;
    let gGreen = document.getElementById("gGreen").value;
    let gBlue = document.getElementById("gBlue").value;

    theText.style.borderColor = "#" + bRed + bGreen + bBlue;
    theText.style.borderWidth = bWidth + "px";
    theText.style.backgroundColor = "#" + gRed + gGreen + gBlue;

    console.log("here");
}