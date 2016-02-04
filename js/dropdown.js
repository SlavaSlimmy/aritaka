$(function(){
    $(document).mouseup(function (e){
        var targetId = $(e.target).attr("data-dropdown-id"),
            toggle = $('[data-toggle="dropdown"]');
        if (!toggle.is(e.target)
            && toggle.has(e.target).length === 0) {
            toggle.parent('.dropdown').removeClass('dropdown_open');
        }

        $(toggle).each( function() {
            if ($(this).attr("data-dropdown-id") == targetId) {
                $(this).parent('.dropdown').toggleClass('dropdown_open');
            }
            else {
                $(this).parent('.dropdown').removeClass('dropdown_open');
            }
        });
    });
});
