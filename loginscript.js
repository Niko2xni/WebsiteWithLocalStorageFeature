document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var loginEmail = document.getElementById("loginEmail").value;
    var loginPassword = document.getElementById("loginPassword").value;

    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    if (loginEmail == ""|| loginPassword == "") {
        alert("Please fill in all the required fields.")
        return
    }
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Incorrect Username or Password!");
        return
    }

    document.getElementById("loginForm").reset();
});