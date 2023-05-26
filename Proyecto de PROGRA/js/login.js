
var attempt = 3;

/*
 funcion que  valida si el usuario esta registrado 
 */
function validate() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    if (user == "admin" && password == "1234") {
        alert("ingreso exitoso");
        window.location = "HOME.HTML";
        return false;

    } if (user == "cliente" && password == "1234") {
        alert("ingreso exitoso");
        window.location = "HOME.HTML";
        return false;
    }

    else {
        attempt--;
    }

    alert("te queda " + attempt + " intentos mas")
    if (attempt == 0) {
        document.getElementById("user").disable = true;
        document.getElementById("password").disable = true;
        document.getElementById("sumbit").disable = true;
    }
}

/*alerta que confirma al usuario que logro ingresar */
function enviar() {
alert("enviado con exito");
window.location = "HOME.HTML";
return false;
}
