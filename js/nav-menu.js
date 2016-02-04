$(function() {
    $('.nav-menu__toggle').click(function(e) {
        $(this).toggleClass('nav-menu__toggle_active');
        $('.nav-menu__wrapper').toggleClass('nav-menu__wrapper_hidden');

        e.preventDefault();
    });
});
