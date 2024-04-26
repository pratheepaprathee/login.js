
var regBox = document.getElementById("register")
var loginBox = document.getElementById("login")
var forgetBox = document.getElementById("forgot")
var loginTab = document.getElementById("lt")
var regTab = document.getElementById("rt")
var emailArray = [];
var passwordArray = [];

function logintab() {
    regBox.style.visibility = "hidden";
    forgetBox.style.visibility = "hidden";
    loginBox.style.visibility = "visible";
    loginTab.style.backgroundColor = "orange";
    regTab.style.backgroundColor = "rgba(148,543,22,0.82)";
}

function regtab() {
    regBox.style.visibility = "visible";
    forgetBox.style.visibility = "hidden";
    loginBox.style.visibility = "hidden";
    loginTab.style.backgroundColor = "rgba(148,543,22,0.82)";
    regTab.style.backgroundColor = "orange";
}
function forgot() {
    regBox.style.visibility = "hidden";
    forgetBox.style.visibility = "visible";
    loginBox.style.visibility = "hidden";
}

function register() {
    event.preventDefault();   //multipul time not use
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;
    if (email == "") {
        alert("Email Required");
        return;
    }
    else if (password == "") {
        alert("Password required");
        return;
    }
    else if (passwordRetype == "") {
        alert("Password required");
        return;
    }
    else if (password != passwordRetype) {
        alert("Password not match");
        return;
    }
    else if (emailArray.indexOf(email) == -1) {
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + "Thanks for registeration.Try to login again Now")
    }
    document.getElementById("re").value = "";
    document.getElementById("rp").value = "";
    document.getElementById("rrp").value = "";
}
function login() {
    event.preventDefault();
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    var i = 0;
    if (email == "") {
        alert("Email Required");
        return;
    }
    else if (emailArray.indexOf(email) == -1) {
        alert("Email does not exits");
    }
    else if (password == "") {
        alert("Password Required")
    }
    else if (passwordArray[i] != password) {
        alert("Password does not match");
        return;
    }
    else {
        alert("Login Successfully welcome to home page")
    }
}
function forgotpass() {
    event.preventDefault();
    var email = document.getElementById("fe").value;

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("Email Required");
            return;
        }
        alert("Email does not exits.");
        return;
    }
    else {
        alert("email is send to your email check it in 24hr.In thanks");
        document.getElementById("fe").value = "";
    }
}
