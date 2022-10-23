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
        Swal.fire(
            "Email requerido",
            "error",
        );
        return ;
    }
    else if (password == ""){
        Swal.fire(
            "Password requerido",
            "error",
        );
        return ;
    }
    else if (passwordRetype == ""){
        Swal.fire(
            "Password requerido",
            "error",
        );
        return ;
    }
    else if ( password != passwordRetype ){
        Swal.fire(
            "La contraseña no coincide",
            "error",
        );
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);
        Swal.fire(
            (email + "  Gracias por registrarte. \nAhora puedes iniciar sesion"),
            "success",
        );
       
        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
    }
    else{
        Swal.fire(
            (email + " ya esta registrado."),
            "warning",
        );
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
            Swal.fire(
                "Email requerido",
                "error",
            );
            return ;
        }
        Swal.fire(
            "Email no existe",
            "error",
        );
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            Swal.fire(
                "Contraseña requerida.",
                "error",
            );
            return ;
        }
        Swal.fire(
            "La contraseña no coincide.",
            "error",
        );
        return ;
    }
    else {
        Swal.fire(
            (" Bienvenido! \n " + email),
            "success",
        );

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
            Swal.fire(
                "Email requerido",
                "error",
            );
            return ;
        }
        Swal.fire(
            "Email no existe",
            "error",
        );
        return ;
    }

    Swal.fire("te enviamos un email, estara activo por 24hs. \n Gracias");
    document.getElementById("fe").value ="";
}




//PINTAR CARRITO EN HEADER
carrito.length === 0 ? (totalEnHeader.innerHTML = `<a href="../pages/tienda.html"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></a>`) : (totalEnHeader.innerHTML = `<a href="../pages/tienda.html"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></a>`);


