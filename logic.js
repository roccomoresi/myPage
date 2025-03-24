function logear(event) {

event.preventDefault();

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

console.log("Usuario ingresado:", user);
console.log("Contraseña ingresada:", pass);

if(user === "Juan" && pass === "1234"){
    window.location.href = "bienvenida.html";
} 
else{
    alert("Datos incorrectos..")
}


}   

function registrar(event) {

    event.preventDefault(); // Evita recargar la página

    window.location.href = "registro.html";

    let newUser = document.getElementById("newUser").value.trim();
    let newPass = document.getElementById("newPass").value.trim();

    if (newUser === "" || newPass === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }





    // Guardar en localStorage
    localStorage.setItem("usuario", newUser);
    localStorage.setItem("contraseña", newPass);

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
}

function logear(event) {
    event.preventDefault();

    let loginUser = document.getElementById("loginUser").value.trim();
    let loginPass = document.getElementById("loginPass").value.trim();

    // Obtener los datos guardados
    let savedUser = localStorage.getItem("usuario");
    let savedPass = localStorage.getItem("contraseña");

    if (loginUser === savedUser && loginPass === savedPass) {
        alert("Inicio de sesión exitoso.");
        window.location.href = "bienvenida.html"; // Redirige a la página de bienvenida
    } else {
        alert("Datos incorrectos.");
    }
}