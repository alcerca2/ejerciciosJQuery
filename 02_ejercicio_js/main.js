// EJERCICIO 2


//al abrirse, que se oculte
$("document").ready(function () {
        $("#mensaje_img1").hide();

    }

);


//de tal etiqueta tal id
$("#imagen1").hover(function () {
        // cuando entres, que se muestre
        $("#mensaje_img1").show();
    },
    function () {
        // cuando salgas, que se oculte
        $("#mensaje_img1").hide();
    }

);