document.addEventListener('deviceready', onDeviceReady, false);

// Login

var btnLogin = document.getElementById("logInButton");
btnLogin.onclick = login;
let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");

function login(){
  if (email.value == "" || email.value == null) {
        alert("El campo 'Email' no puede estar vacio");
    } else if (password.value == ""  || password.value == null) {
        alert("El campo 'Password' no puede estar vacio");
    } else {
        validateLogin(email.value, password.value);
    }

}

function validateLogin(email, password) {
    let userData = "/login/student?" + "email=" + email + "&password=" + password;
    $.ajax({
        method: "POST",
        url: "https://morning-peak-25234.herokuapp.com" + userData,
        dataType: "json",
    }).done(function(user) {
        if (user.status != "ERROR") {
            let url = window.location;
            window.location.replace("index.html");
            
        }

    }).fail(function() {
        alert("Email o password incorrectos.");
    });
}

function onDeviceReady() {
    // Pass
}