function auth(event) {
    event.preventDefault();

    var email = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if (email === "quizmaster" && password === "$klebca") {
         window.location.replace("/pages/quiz.html");
    } else {
        alert("Invalid information");
        return;
    }
}