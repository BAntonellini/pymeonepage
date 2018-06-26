/* jQuery fullPage.js init */

$('#fullpage').fullpage({
    anchors: ['seccion0', 'seccion1', 'seccion2', 'seccion3'],
    scrollOverflow: true,
    scrollOverflowReset: false,
	scrollOverflowOptions: null,
});

/* window.sr = ScrollReveal(); */
var waypoint = new Waypoint({
    element: document.getElementById('comohacemos'),
    handler: function () {
        $('#container-servicios button').remove();
        $('#textos-comohacemos').fadeOut(500);
        $('#container-servicios').animate({
            width: "95vw",
        }, 1000, function () {
            $('.icono-servicio').fadeIn(400);
        });
    } // FIN HANDLER
}); // FIN OBJETO WAYPOINT

window.onload = function () {
    /* $.get("servicios.html", function (data) {
        $('#container-servicios button').after(data);
    });
    var alturaParent = $('.parent').css('width');
    $('.imagen-frente').css('width', alturaParent);
    $('.imagen-fondo').css('width', alturaParent); */
};

$(function () {
    $('.parent').mouseover(function () {
        $(this).children().first().addClass('zoomed');
    });
    $('.parent').mouseout(function () {
        $(this).children().first().removeClass('zoomed');
        $(this).children().first().addClass('unzoomed');
    });
});



$('#cont-comohacemos').click(function () {
    var htmlBoton = '<button><i class="fas fa-angle-right" id="flecha-servicios"></i></button>';
    $('.icono-servicio').fadeOut(400).promise();
    $('#container-servicios').animate({
        width: "100px",
    }, 1000, function () {
        $('#container-servicios').html(htmlBoton);
        $('#textos-comohacemos').fadeIn(500);
        $.get("servicios.html", function (data) {
            $('#container-servicios button').after(data);
        });
    });
});

/* FUNCTION: MODIFY BANNER IMGS TO OCCUPY VIEWPORT HEIGHT */
  $(document).ready(function () {
    let anchoOriginalImg = parseInt($('.imagen-frente').css('width'));
    let altoOriginalImg = parseInt($('.imagen-frente').css('height'));
    let alturaSection = parseInt($('section#quehacemos').css('height'));
    let alturaFinal = alturaSection / 3;
    

    var variacion = ((alturaFinal * 100) / altoOriginalImg) / 100;
    let anchoFinal = anchoOriginalImg * variacion;

    $('.parent').css('height', alturaFinal);
    $('.imagen-frente').css('height', alturaFinal);
    $('.imagen-fondo').css('height', alturaFinal);

    $('.parent').css('width', anchoFinal);
    $('.imagen-frente').css('width', anchoFinal);
    $('.imagen-fondo').css('width', anchoFinal);

}); // FUNCTION END

/* $(document).ready(function () {
    var alturaSeccion = parseInt(('#fullpage > div.section.fp-section.fp-table.active.fp-completely > div').css('height'));
    $('#fondo-section-servicios').css('height', alturaSeccion);
}) */