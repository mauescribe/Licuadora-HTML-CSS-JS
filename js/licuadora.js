/* lo primero que hago es crear una variable que me diga el estado 
de mi licuadora, por defecto va a estar apagada*/
var estadoLicuadora = "apagado";
var licuadora = document.getElementById("licuadora");

/* creo una funcion para controlar la licuadora, que lo que va
a hacer es ver en que estado esta la licuadora y cambiarlo*/

function controlarLicuadora() {
  if (estadoLicuadora == "apagado") {
    estadoLicuadora = "encendido";
    licuadora.classList.add("licuadoraprendida");
    console.log("me prendiste");
  } else {
    estadoLicuadora = "apagado";
    licuadora.classList.remove("licuadoraprendida");
    console.log("me apagaste");
  }
}
