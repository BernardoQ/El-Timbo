const emailArray=[];
const passwordArray=[];

let loginBox = document.getElementById("login");
let regBox = document.getElementById("register");
let forgetBox = document.getElementById("forgot");

let loginTab = document.getElementById("lt");
let regTab = document.getElementById("rt");

function regTabFun(){
    event.preventDefault();
}
function loginTabFun(){
    event.preventDefault();
}
function forTabFun(){
    event.preventDefault();
}

//FUNCION REGISTRARSE
function register(){
    event.preventDefault();

    const email = document.getElementById("re").value;
    const password = document.getElementById("rp").value;
    const passwordRetype = document.getElementById("rrp").value;

    if (email == ""){
        swal.fire("Email requerido");
        return ;
    }
    else if (password == ""){
        alert("Password requerido");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password requerido");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("La contraseña no coincide");
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);

        alert(email + "  Gracias por registrarte. \nAhora puedes iniciar sesion");

        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
    }
    else{
        alert(email + " ya esta registrado.");
        return ;
    }
}

//FUNCION LOGIN
function login(){
    event.preventDefault();

    let email = document.getElementById("se").value;
    let password = document.getElementById("sp").value;

    let i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email requerido.");
            return ;
        }
        alert("Email no existe.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Contraseña requerida.");
            return ;
        }
        alert("La contraseña no coincide.");
        return ;
    }
    else {
        alert(email + " ahora estas logeado \n Bienvenido!");

        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        return ;
    }

}

//FUNCION OLVIDASTE DATOS
function forgot(){
    event.preventDefault();

    let email = document.getElementById("fe").value;

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Email requerido.");
            return ;
        }
        alert("El Email no existe.");
        return ;
    }

    alert("te enviamos un email, estara activo por 24hs. \n Gracias");
    document.getElementById("fe").value ="";
}