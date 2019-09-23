function validate() {
    let firstText = document.getElementById("first").value;
    let secondText = document.getElementById("second").value;

    if(firstText !== secondText) {
        alert("The two passwords do not match");
    }

    if(firstText.length < 8 || secondText.length < 8) {
        alert("Passwords are not at least 8 characters long")
    }
}