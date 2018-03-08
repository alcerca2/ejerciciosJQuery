// EJERCICIO 3

// que haya unos textos que se seleccionan

//al abrirse, imagen en blanco
//////////////////////////////////////////////////////////////////
$("document").ready(function () {
            //establecer cambio del src
            $("#contenedor2 > img").attr("src", "img/blanco.jpg");

    }

);




// al hover de imagen 1
//////////////////////////////////////////////////////////////////
$("#elem1").hover(function () {
    //añadir clase .destacar
    $(this).addClass("destacar");
    
    //establecer cambio del src
    $("#contenedor2 > img").attr("src", "img/arbol.jpg");
},


function () {
    //quitar clase .destacar
    $(this).removeClass("destacar");

    // cuando salgas, blanco
    $("#contenedor2 > img").attr("src", "img/blanco.jpg");
}

);


// al hover de imagen 2
//////////////////////////////////////////////////////////////////
$("#elem2").hover(function () {
    //añadir clase .destacar
    $(this).addClass("destacar");
    
    //establecer cambio del src
    $("#contenedor2 > img").attr("src", "img/rio.jpg");
},


function () {
    //quitar clase .destacar
    $(this).removeClass("destacar");

    // cuando salgas, blanco
    $("#contenedor2 > img").attr("src", "img/blanco.jpg");
}

);

// al hover de imagen 3
//////////////////////////////////////////////////////////////////
$("#elem3").hover(function () {
    //añadir clase .destacar
    $(this).addClass("destacar");
    
    //establecer cambio del src
    $("#contenedor2 > img").attr("src", "img/lago.jpg");
},


function () {
    //quitar clase .destacar
    $(this).removeClass("destacar");

    // cuando salgas, blanco
    $("#contenedor2 > img").attr("src", "img/blanco.jpg");
}

);

// al hover de imagen 4
//////////////////////////////////////////////////////////////////

$("#elem4").hover(function () {
    //añadir clase .destacar
    $(this).addClass("destacar");
    
    //establecer cambio del src
    $("#contenedor2 > img").attr("src", "img/sol.jpg");
},


function () {
    //quitar clase .destacar
    $(this).removeClass("destacar");

    // cuando salgas, blanco
    $("#contenedor2 > img").attr("src", "img/blanco.jpg");
}

);

