//Las funciones de js dependen de los eventos para ser ejecutadas -w3schools
function saludo(){
    alert("Hola Mundo");
}

function suma(){
    let A=0;
    let B=0;
    let S=0;

    A=parseInt(prompt('Porfavor ingrese el primer valor a sumar'))
    B=parseInt(prompt('Porfavor ingrese el segundo valor a sumar'))
    S=A+B

    alert('El resultado de la suma es: ' + S)
    
}