$('button').click(function (e) {
    e.preventDefault();
   /*  $('#banner').hide(); */
    $('button').each(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
    });
    $(this).addClass('active');
    

    let idBoton = $(this).attr('id')
    switch (idBoton) {
        case 'boton-sp':
            $('#banner').attr('src', '../img/banners/mobile/Banners Cel Pymes.jpg');       
            break;
        case 'boton-cpc':
            $('#banner').attr('src', '../img/banners/mobile/Banners Cel CPC.JPG');
            break;
        case 'boton-cps':
            $('#banner').attr('src', '../img/banners/mobile/Banners Cel CPS.JPG');
            break;
        default:
            break;
    }
   $('#banner').show('drop', {direction: 'right'}, 'slow');   
});