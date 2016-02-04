$(function() {
    $(".tooltip").hover(function () {
            $(this).find('.tooltip__container').fadeIn(200);
        },
        function () {
            $(this).find('.tooltip__container').fadeOut(200);
        }
    );
});