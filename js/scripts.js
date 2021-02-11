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