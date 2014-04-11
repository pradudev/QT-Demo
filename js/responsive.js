$(document).ready(function ($) {
    collapseSections($(this).width());

    $(".royalSlider").royalSlider({
        keyboardNavEnabled: true,
        controlNavigation: 'none',
        arrowsNav: false,
        controlsInside: false,
        navigateByClick: false,
        slidesSpacing: 0,
        fadeinLoadedSlide: false,
        minSlideOffset: 0,
        numImagesToPreload: 20
    });

    $(window).bind("resize", function() {
        collapseSections($(this).width());
    });

    var slider = $(".royalSlider").data('royalSlider');

    $('.scroll-left').click(function() {
        slider.prev();
    });

    $('.scroll-right').click(function () {
        slider.next();
    });

    $('#navigationHeader').click(function () {
        
        if ($(this).hasClass('collapsed')) {
            $('.scroll-left, .scroll-right').slideDown(500);        
        } else {
            $('.scroll-left, .scroll-right').slideUp(500);
            //$('#servicesList').removeClass('in');
        }        
    });

});

collapseSections = function (currentWidth) {
    if (currentWidth < 800) {
        $('.in').not('#subNavigation').each(function (x, section) {
            $(this).removeClass('in');

            $(this).prevAll('h3').addClass('collapsed');
        });
    } else {
        $('.panel-collapse.collapse').not('#servicesList').not('#subNavigation').addClass('in');
    }
};