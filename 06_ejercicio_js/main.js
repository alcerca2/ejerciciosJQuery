// EJERCICIO 6


//banner qeu se cierra y productos que se añaden al carro de la compra

//pinchar en banner
///////////////////////////////////////////////////////////////
$("#banner > #cerrar").on("click", function () 
    {
        $("#banner").remove();
        
    }
);

//pinchar en img
///////////////////////////////////////////////////////////////
$("img").on("click", function () 
    {
        $(this).replaceWith("<div class='texto'> Al carro </div>");
        
    }
);
