document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var fname = document.getElementById('fName').value;
    var lname = document.getElementById('lName').value;
    var email = document.getElementById('userEmail').value;
    var pass = document.getElementById('userPassword').value;
    var confirmpass = document.getElementById('confirmPassword').value;

    
    if (fname == "" || lname == ""|| email == ""|| pass == ""|| confirmpass == "") {
        alert("Please fill in the required fields.");
        return
    }
    if (pass !== confirmpass) {
        alert("Passwords do not match.")
        return
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);

    alert("Registration Successful!");
    window.location.href = "login.html";
    document.getElementById("registrationForm").reset();
});