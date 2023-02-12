function auth(event) {
    event.preventDefault();

    var email = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if (email === "puzzfire" && password === "!klebca") {
         window.location.replace("/pages/GG.html");
    } else {
        alert("Invalid information");
        return;
    }
}