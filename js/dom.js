// const figura = document.getElementById("figura");
// console.log(figura);

function circulo() {
    // const figura = document.getElementById("figura");
    const figura = document.getElementById("figura");
    const titulo = document.querySelector(".titulo");

    figura.classList.toggle("circulo");
    titulo.textContent='CIRCULO'
}

function hor() {
    const figura = document.getElementById("figura");
    const titulo = document.querySelector(".titulo");

    figura.classList.toggle("hor")
    titulo.textContent='HORIZONTAL'
}

function ver(){
    const figura = document.getElementById("figura");
    const titulo = document.querySelector(".titulo");

    figura.classList.toggle("ver");
    titulo.textContent='VERTICAL'
}

function gif(){
    const figura= document.getElementById("figura")
    const titulo = document.querySelector(".titulo");

    figura.classList.toggle("gif");
    titulo.textContent='GIF'
}

function degrade(){
    const figura = document.getElementById("figura");
    const titulo = document.querySelector(".titulo");
    
    figura.classList.toggle("degrade");
    titulo.textContent='DEGRADADO'
}

function panelLateral(){
    const panel = document.querySelector(".panel-lateral");
    panel.classList.toggle('active');
}

function moveTop(){
    const figura = document.querySelector("#figura");
    const titulo = document.querySelector(".titulo");

    figura.classList.toggle('top')
    titulo.textContent='TOP'
}

function moveBottom(){
    const figura = document.querySelector("#figura");
    const titulo = document.querySelector(".titulo");

    figura.classList.toggle('bottom')
    titulo.textContent='BOTTOM'
}

function moveLeft(){
    const figura = document.querySelector("#figura");
    const titulo = document.querySelector(".titulo");
    
    figura.classList.toggle('left')
    titulo.textContent='LEFT'
}

function moveRight(){
    const figura = document.querySelector("#figura");
    const titulo = document.querySelector(".titulo");
    
    figura.classList.toggle('right')
    titulo.textContent='RIGHT'
}

function levitar(){
    const figura = document.querySelector("#figura");
    const titulo = document.querySelector(".titulo");
    
    figura.classList.toggle('levitar')
    titulo.textContent='LEVITAR'
}

function panelSuperior(){
    const panel = document.querySelector(".panel-superior");
    panel.classList.toggle('active');
}