function auth(event) {
    event.preventDefault();

    var email = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if (email === "mastermind" && password === "@klebca") {
         window.location.replace("/pages/shuffleMarks.html");
    } else {
        alert("Invalid information");
        return;
    }
}