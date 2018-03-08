// EJERCICIO 5

// click para mostrar imágenes y hover

//al abrirse
//////////////////////////////////////////////////////////////////
$(document).ready(function () 
    {
        //función
        $("#carrete").hide();
    }
);

//document he probado y me funcionaba con y sin comillas

//pinchar en cualquier lado
///////////////////////////////////////////////////////////////
$(document).on("click", function () 
    {
            //función
            $("#carrete").show();
            $("h1").hide();
    }
);

//hover
/////////////////////////////////
// he visto que en el vídeo era on mouseover pero era para probar
$("#carrete > img").hover(function () 
{
    //añadir clase .destacar
    $(this).css("width", "300")
    .css("height", "auto");

},
function () 
{
    //añadir clase .destacar
    $(this).css("width", "inherit");
}

);
