/* jQuery fullPage.js init */
$(document).ready(function () {
    $('#fullpage').fullpage();
});

/* FUNCTION: MODIFY BANNER IMGS TO OCCUPY VIEWPORT HEIGHT */
$(document).ready(function () {
    let alturaSection = $('section#quehacemos').css('height');
    let alturaSectionInt = parseInt(alturaSection);
    let alturaFinal = alturaSectionInt / 3;

    $('.parent').css('height', alturaFinal);
    $('.imagen-frente').css('height', alturaFinal + 0.2);
    $('.imagen-fondo').css('height', alturaFinal);
}); // FUNCTION END

/* Animated scrolling to sections */
// handle links with @href started with '#' only
$(document).on('click', '#li-nav a[href^="#"]', function (e) {
    // target element id
    var id = $(this).attr('href');
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    // prevent standard hash navigation (avoid blinking in IE)
    /* e.preventDefault(); */
    // top position relative to the document
    var pos = $id.offset().top;
    // animated top scrolling
    $('body, html').animate({
        scrollTop: pos
    });
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

$('div.juan').hover(function () {
    $('#container-servicios button').remove();
    $('#textos-comohacemos').fadeOut(500);
    $('#container-servicios').animate({
        width: "95vw",
    }, 1000, function () {
        $('.icono-servicio').fadeIn(400);
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

var padreServicios = $('section#comohacemos').parent();

var waypoint2 = new Waypoint({    
    element: padreServicios,
    handler: function (direction) {
        alert('Scrolled to waypoint!')
    }
})




