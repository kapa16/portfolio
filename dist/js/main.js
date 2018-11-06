$(document).ready(function() {

    $(window).on("scroll", function(){
        var win = $(window).height();
        if ($(window).scrollTop()>win)
            $(".sticky").addClass("sticky_fixed");
        else
            $(".sticky").removeClass("sticky_fixed");
    });

});