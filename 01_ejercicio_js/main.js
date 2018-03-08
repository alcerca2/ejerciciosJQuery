// EJERCICIO 1

//de tal etiqueta tal id
$("#img1").on("mouseover", function()

    {
        //establecer cambio del src
        $("#img1").attr("src", "img/rio.jpg");
    }

);
// al quitar ratón el árbol otra vez
$("#img1").on("mouseout", function()

    {
        //establecer cambio del src
        $("#img1").attr("src", "img/arbol.jpg");
    }

);