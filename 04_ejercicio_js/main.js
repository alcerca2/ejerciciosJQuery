// EJERCICIO 4

// click para cambiar color

//al abrirse
//////////////////////////////////////////////////////////////////
$("document").ready(function () {
        //función
        $("#anuncio").text("Pincha aquí para conocer colores solteros en tu zona")
        .hide()
        .fadeIn(1000)
        .css("height", "500")
        .css("width", "500")
        .css("margin", "3% auto");
        //los puntos pueden ir en 1 línea
    }
);


//los que se van a usar
let colores = ["blue","red","green","orange","purple"];

//pinchar
///////////////////////////////////////////////////////////////
$("#anuncio").on("click", function () {
    // color aleatorio de los de dentro de eesto
    let randomcolor = colores[Math.floor(Math.random() * colores.length)];
    // poner el color aleatorio
    $(this).css("background-color", randomcolor);
});