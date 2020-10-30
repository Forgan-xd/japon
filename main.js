ScrollReveal().reveal('.general');
ScrollReveal().reveal('.primeraimagen',{delay:500})
ScrollReveal().reveal('.primerparrafo',{delay:500})
ScrollReveal().reveal('.segundoparrafo',{delay:500})
ScrollReveal().reveal('.imagen2',{delay:500})
ScrollReveal().reveal('.redes sociales',{delay:1000})
function botonredes(){
    document.getElementById("redessocialiticas").style.display="block",ScrollReveal().reveal("redessocialiticas")
}

function botonreferencias (){
    document.getElementById("referencias").style.display="block"
    document.getElementById("botonbases").style.display="none"
    document.getElementById("Ocultar_Referencias").style.display="block"
}
function ocultar_referencias (){
    document.getElementById("referencias").style.display="none"
    document.getElementById("botonbases").style.display="block"
    document.getElementById("Ocultar_Referencias").style.display="none"
}
function menu_desplegable(){
    document.getElementById("parrafo_2").style.display="none"
    document.getElementById("preguntocas").style.display="block"
    document.getElementById("botonbases").style.display="none"
    document.getElementById("sigame").style.display="none"
    document.getElementById("dale").style.display="none"
    document.getElementById("menuco").style.display="none"
    document.getElementById("ocultelo_parcero").style.display="block"
}
function menu_ocultar(){
    document.getElementById("parrafo_2").style.display="block"
    document.getElementById("preguntocas").style.display="none"
}