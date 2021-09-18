$(function () {
    // Menú Responsive
    $('.menu-movil').on('click', function () {
        $('#navegacion').slideToggle();

        $(window).resize(function () {
            var anchoVentana = $(window).width();
            if (anchoVentana > 768) {
                $('#navegacion').css({
                    'display': 'block'
                });
            } else {
                $('#navegacion').css({
                    'display': 'none'
                });
            }
        });
    });
});

/*===== SCROLL REVEAL ANIMATION ======*/
const sr = ScrollReveal({
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal('.icono, .anuncio', { origin: 'top', interval: 200 });
sr.reveal('.contactanos-contenedor, .imagen', { origin: 'left' });
sr.reveal('.texto-nosotros, .texto-entrada', { origin: 'right' });
sr.reveal('.title', { origin: 'bottom' });